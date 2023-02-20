import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/service/movies.service";
import { ActivatedRoute, Params } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from "@angular/material";
import { AppMovieDialogComponent } from "../movie-details/app-movie-dialog/app-movie-dialog.component";
import {
  AdminMoviesService,
  RootObject,
} from "src/app/service/adminmovieservice";
import { analyzeAndValidateNgModules, flatten } from "@angular/compiler";
import { isFakeMousedownFromScreenReader } from "@angular/cdk/a11y";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
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
  cart_disable: boolean = true;
  cart2_disable: boolean = true;
  list_disable: boolean = true;
  checkResult: RootObject;
  result: boolean;
  x: boolean;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private adminService: AdminMoviesService
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
      this.searchstorage(this.id);
      this.checkWatchlist(this.id);
      console.log(localStorage.getItem("items"));
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
    this.dialog.open(AppMovieDialogComponent, {
      height: "600px",
      width: "900px",
      data: { video: this.video },
    });
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

  checkWatchlist(id: any) {
    let watch_items = [];
    watch_items = JSON.parse(localStorage.getItem("watch_items"));
    console.log(watch_items);
    let foundItem = null;
    for (let key in watch_items) {
      if (watch_items[key].item.id == this.id) {
        foundItem = watch_items[key];
        break;
      }
    }
    if (foundItem !== null) this.list_disable = true;
    else this.list_disable = false;
  }

  addWatchlist(movie: any) {
    let watch_items = [];
    console.log(this.result);
    if (localStorage.getItem("watch_items")) {
      watch_items = JSON.parse(localStorage.getItem("watch_items"));
    }

    watch_items.push({ item: movie });
    localStorage.setItem("watch_items", JSON.stringify(watch_items));
    console.log(localStorage.getItem("watch_items"));
    this.list_disable = true;
  }
  searchstorage(id: any) {
    let items = [];
    items = JSON.parse(localStorage.getItem("items"));
    let foundItem = null;
    for (let key in items) {
      if (items[key].item.id == this.id) {
        foundItem = items[key];
        this.cart_disable = true;
        this.cart2_disable = false;
        break;
      }
    }
  }

  addCart(movie: any) {
    let items = [];
    console.log(this.result);
    if (localStorage.getItem("items")) {
      items = JSON.parse(localStorage.getItem("items"));
    }
    movie.type = "movie";
    items.push({ item: movie });
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage.getItem("items"));
    this.cart_disable = true;
    this.cart2_disable = false;
  }

  removeCart(movie: any) {
    var itemId = movie.id;
    var type = "movie";
    let storagItems = JSON.parse(localStorage.getItem("items"));
    let items = storagItems.filter((item) => item.item.id !== itemId);
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage.getItem("items"));
    this.cart2_disable = true;
    this.cart_disable = false;
  }

  async checkInSystem(id: any) {
    this.checkResult = await this.adminService.checkInSystem(id);

    if (this.checkResult.available == "1") {
      this.cart_disable = false;
      this.cart2_disable = true;
      this.searchstorage(this.id);
    } else if (this.checkResult.available == "0") {
      this.cart_disable = true;
    }
  }
}
