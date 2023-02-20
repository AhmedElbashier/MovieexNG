import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { RootObject } from 'src/app/service/adminmovieservice';
import { AdminSdPlaysService } from 'src/app/service/adminsdplayservice';
import { AppAdminsudanplayDetailsComponent } from './app-adminsudanplay-details/app-adminsudanplay-details.component';

@Component({
  selector: 'app-adminsudanplay-details',
  templateUrl: './adminsudanplay-details.component.html',
  styleUrls: ['./adminsudanplay-details.component.scss']
})
export class AdminsudanplayDetailsComponent implements OnInit {

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
  result: boolean;
  x: boolean;
  disable: boolean;
  available_disable: boolean;
  unavailable_disable: boolean;
  add: any;
  constructor(
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private adminService: AdminSdPlaysService
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
    this.router.params.subscribe(async (params: Params) => {
      this.id = params["id"];
      await this.getSingleMoviesDetails(this.id);
     if(this.movie.available=false)
     {
     this.available_disable=false;
     this.unavailable_disable=true;

     }
     else if(this.movie.available=true)
     {
       this.unavailable_disable=false;
       this.available_disable=true;

     }
    });
  }

  async getSingleMoviesDetails(id) {
    this.movie = await this.adminService.getPlay(id);
  }

  openDialogMovie(video): void {
    this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
      video
    );
    this.dialog.open(AppAdminsudanplayDetailsComponent, {
      height: "600px",
      width: "900px",
      data: { video: this.video },
    });
  }
  async markAvailable(movie: any) {
    movie.next_episode_to_air = null;
    movie.languages = null;
    movie.origin_country = null;
    movie.episode_run_time = null;
    movie.available = true;
    console.log(movie);
    await this.adminService.markAvailable(movie, this.id);
    this.checkInSystem(this.id);
  }

  async markUnavailable(movie: any) {
    movie.next_episode_to_air = null;
    movie.languages = null;
    movie.origin_country = null;
    movie.episode_run_time = null;
    movie.available = false;
    await this.adminService.markUnavailable(movie, this.id);
    this.checkInSystem(this.id);
  }
async checkInSystem(id: any) {
    this.checkResult = await this.adminService.checkInSystem(id);
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
}