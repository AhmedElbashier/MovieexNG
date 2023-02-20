import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "primeng";
import {
  AdminMoviesService,
  RootObject,
} from "src/app/service/adminmovieservice";
import { AppSearchMoviesDialogComponent } from "./app-searchmovies-dialog/app-searchmovies-dialog.component";
import {
  DialogElementsExample,
  DialogElementsExampleDialog,
} from "./dialog/DialogElementsExample";

@Component({
  selector: "app-searchmovies-details",
  templateUrl: "./searchmovies-details.component.html",
  styleUrls: ["./searchmovies-details.component.scss"],
})
export class SearchMoviesDetailsComponent implements OnInit {
  public id: number;
  public video: boolean;
  movie: any;
  baseUrl = "https://www.youtube.com/embed/";
  autoplay = "?rel=0;&autoplay=1&mute=0";
  relatedvideo: any;
  casts: any = [];
  backdrops: any = [];
  recomendMovies: any = [];
  responsiveOptions;
  checkResult: RootObject;
  disable: boolean;
  available_disable: boolean;
  unavailable_disable: boolean;
  add: any;

  constructor(
    private movieService: AdminMoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getSingleMoviesVideos(this.id);
      this.getSingleMoviesDetails(this.id);
      this.getCast(this.id);
      this.getBackropsImages(this.id);
      this.getRecomendMovie(this.id);
      this.checkInSystem(this.id);

      this.available_disable = true;
      this.unavailable_disable = true;
    });
  }

  getSingleMoviesDetails(id) {
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
    });
  }

  getSingleMoviesVideos(id) {
    this.movieService.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedvideo = res.results;
      }
    });
  }

  openDialogMovie(video): void {
    this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.baseUrl + video.key + this.autoplay
    );
    this.dialog.open(AppSearchMoviesDialogComponent, {
      height: "600px",
      width: "900px",
      data: { video: this.video },
    });
  }

  async addToSystem(movie: RootObject) {
    console.log(movie);
    await this.movieService.addToSystem(movie);
    this.checkInSystem(this.id);
  }
  async checkInSystem(id: any) {
    this.checkResult = await this.movieService.checkInSystem(id);
    if (this.checkResult == null) {
      this.available_disable = true;
      this.unavailable_disable = true;
    }
    if (this.checkResult.available == "1") {
      this.available_disable = true;
      this.unavailable_disable = false;
    } else if (this.checkResult.available == "0") {
      this.available_disable = false;
      this.unavailable_disable = true;
    }

    if (this.checkResult.id == id) {
      this.disable = true;
    } else if (this.checkResult.id != id) {
      this.disable = false;
    }
  }

  async markAvailable(movie: any) {
    movie.next_episode_to_air = null;
    movie.languages = null;
    movie.origin_country = null;
    movie.episode_run_time = null;
    movie.available = true;
    console.log(movie);
    await this.movieService.markAvailable(movie, this.id);
    this.checkInSystem(this.id);
  }

  async markUnavailable(movie: any) {
    movie.next_episode_to_air = null;
    movie.languages = null;
    movie.origin_country = null;
    movie.episode_run_time = null;
    movie.available = false;
    await this.movieService.markUnavailable(movie, this.id);
    this.checkInSystem(this.id);
  }

  getCast(id) {
    this.movieService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getBackropsImages(id) {
    this.movieService.getBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
    });
  }

  getRecomendMovie(id) {
    this.movieService.getRecomendMovies(id).subscribe((res: any) => {
      this.recomendMovies = res.results;
    });
  }
}
