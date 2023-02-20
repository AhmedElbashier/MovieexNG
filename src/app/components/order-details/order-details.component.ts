import { LowerCasePipe } from "@angular/common";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, provideRoutes, Router } from "@angular/router";
import ShortUniqueId from "short-unique-id";
import { OrderDetails } from "src/app/service/cartservice";
import { Movie, MoviesService } from "src/app/service/movies.service";
import { OrderService } from "src/app/service/orderservice";
import { Tv, TvService } from "src/app/service/tv.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"],
})
export class OrderDetailsComponent implements OnInit {
  id: string;
  order: any;
  tv: Tv;
  movie: Movie;
  products:any[];
  product: any;
  qrInfo;
  orderItem:OrderDetails={
    OrderId: "",
    Id:"",
    MovieId:"",
    Deleted:"not deleted",
    MovieType:""

  }
  constructor(
    private router: ActivatedRoute,
    private orderService: OrderService,
    private movieService: MoviesService,
    private tvService: TvService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getOrderDetail(this.id);
    });
  }

  async getOrderDetail(id: string) 
  {
    let orderDetail = [];
    this.order = await this.orderService.getOrderDetails(id);
    let foundItem;
    let products=[];
    for (let key in this.order) 
    {
      if (this.order[key].movieId !== null) {
        foundItem = this.order[key].movieId;
        if (this.order[key].movieType == "movie") {
          this.product = await this.movieService.getSystemMovie(foundItem);
          products.push({item : this.product});
          // console.log(products);
        } 
        else
        {
          this.product = await this.tvService.getSystemTVShow(foundItem);
          products.push({item : this.product});
          // console.log(products);
        }
      }
    }
      localStorage.setItem("OrdersBack", JSON.stringify(products));
      this.products = JSON.parse(localStorage.getItem("OrdersBack"));
      console.log(this.products);
      this.qrInfo = JSON.stringify(this.order);
  }

  removeFromList(order:any)
  {
    const uid = new ShortUniqueId({ length: 2 });
    let BigId = uid.stamp(11);
    this.orderItem.OrderId=this.id;
    this.orderItem.MovieId= order.id;
    this.orderItem.Deleted= "deleted";
    this.orderItem.MovieType = order.type;
    // this.orderItem.Id = BigId;
    
    var itemId = order.id;
    var type = "movie";
    let storagItems = JSON.parse(localStorage.getItem("OrdersBack"));
    let items = storagItems.filter((item) => item.item.id !== itemId);
    this.orderService.deleteOrderItem(this.orderItem);
    localStorage.setItem("OrdersBack", JSON.stringify(items));
    console.log(localStorage.getItem("OrdersBack"));
    this.ngOnInit();

  }
}
