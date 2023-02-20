import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminPlaysService } from 'src/app/service/adminplayservice';
import { AppPlayDialogComponent } from './app-play-dialog/app-play-dialog.component';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.scss']
})
export class PlayDetailsComponent implements OnInit {
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
  result: boolean;
  x: boolean;
  checkResult:any;

  constructor(
    private playService: AdminPlaysService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
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

 async ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getSingleMoviesDetails(this.id);
      this.checkInSystem(this.id);
      this.searchstorage(this.id);
      this.checkWatchlist(this.id);
      console.log(localStorage.getItem("items"));
    });
  }

  async getSingleMoviesDetails(id) {
    this.movie = await this.playService.getPlay(id);
  }



  openDialogMovie(video): void {
    this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.baseUrl + video.key + this.autoplay
    );
    this.dialog.open(AppPlayDialogComponent, {
      height: "600px",
      width: "900px",
      data: { video: this.video },
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
    this.checkResult = await this.playService.checkInSystem(id);

    if (this.checkResult.available == "1") {
      this.cart_disable = false;
      this.cart2_disable = true;
      this.searchstorage(this.id);
    } else if (this.checkResult.available == "0") {
      this.cart_disable = true;
    }
  }
}
