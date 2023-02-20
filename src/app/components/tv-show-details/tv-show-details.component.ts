import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from "@angular/material";
import { AppTvDialogComponent } from "./app-tv-dialog/app-tv-dialog.component";
import { TvService } from "src/app/service/tv.service";
import { AdminTvsService, RootObject } from "src/app/service/admintvservice";

@Component({
  selector: "app-tv-show-details",
  templateUrl: "./tv-show-details.component.html",
  styleUrls: ["./tv-show-details.component.scss"],
})
export class TvShowDetailsComponent implements OnInit {
  public id: number;
  public video: boolean;
  episode: any;
  baseUrl = "https://www.youtube.com/embed/";
  autoplay = "?rel=0;&autoplay=1&mute=0";
  related_video: any;
  casts: any;
  backdrop: any;
  _posters: any;
  _recomend: any;
  responsiveOptions;
  cart_disable: boolean =true;
  cart2_disable: boolean = true;
  list_disable: boolean = true;
  checkResult: RootObject;
  result: boolean;
  x: boolean;

  constructor(
    private tvService: TvService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private adminService: AdminTvsService
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
      this.id = params.id;
      this.cart_disable = true;
      this.getTvDetails(this.id);
      this.getTvVideos(this.id);
      this.getTvCast(this.id);
      this.getTvBackropsImages(this.id);
      this.getRecomendTv(this.id);
      this.checkInSystem(this.id);
      this.searchstorage(this.id);
      this.checkWatchlist(this.id);
      console.log(localStorage.getItem("tv_items"));
    });
  }

  getTvDetails(id) {
    this.tvService.getTVShow(id).subscribe((res: any) => {
      this.episode = res;
    });
  }

  getTvVideos(id) {
    this.tvService.getTvVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.related_video = res.results;
      }
    });
  }

  openDialogTv(video): void {
    this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.baseUrl + video.key + this.autoplay
    );
    this.dialog.open(AppTvDialogComponent, {
      height: "600px",
      width: "900px",
      data: { video: this.video },
    });
  }

  getTvCast(id) {
    this.tvService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getTvBackropsImages(id) {
    this.tvService.getTvBackdropsImages(id).subscribe((res: any) => {
      this.backdrop = res.backdrops;
    });
  }

  getRecomendTv(id) {
    this.tvService.getRecomendTv(id).subscribe((res: any) => {
      this._recomend = res.results;
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
      if(foundItem !== null)
      this.list_disable =true;
      else
      this.list_disable = false;
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
      if (items[key].item.id== this.id) {
        foundItem = items[key];
        this.cart_disable = true;
        this.cart2_disable = false;
        break;
      }
    }
  }

  addCart(movie: any) {
    let items = [];
    var itemId = movie.id;
    var type = "tv";
    console.log(this.result);
    if (localStorage.getItem("items")) {
      items = JSON.parse(localStorage.getItem("items"));
    }
    movie.type="tv";
    items.push({ item: movie });
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage.getItem("items"));
    // this.searchstorage(this.id);
    this.cart_disable = true;
    this.cart2_disable = false;
  }

  removeCart(movie: any) {
    var itemId = movie.id;
    var type = "tv";
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
