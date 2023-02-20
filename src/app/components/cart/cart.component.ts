import { Component, OnInit } from "@angular/core";
import { CartService, Order } from "../../service/cartservice";
import { SelectItem } from "primeng/api";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import ShortUniqueId from "short-unique-id";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  products: [];
  moka: [];
  sortOptions: SelectItem[];
  sortOrder: number;
  date: any;
  order: Order = {
    Id: "",
    Date: "",
    OrderDetails: [],
    Status: "",
    PosterPath: "",
    Amount: "",
  };
  sortField: string;

  constructor(
    private cartService: CartService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("items"));
    console.log(this.products);
    this.sortOptions = [
      { label: "Price High to Low", value: "!price" },
      { label: "Price Low to High", value: "price" },
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  checkOrder(id: any) {
    let orders = [];
    orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders);
    let foundItem = null;
    for (let key in orders) {
      if (orders[key].orderId == id) {
        foundItem = orders[key];
        break;
      }
    }
    if (foundItem !== null) return 1;
    else return 0;
  }

  Order() {
    var result = this.CheckUserLogin();
    if(result==200)
    {
    this.date = new Date();
    this.date = this.datePipe.transform(this.date, "yyyy,MM,dd");
    const uid = new ShortUniqueId({ length: 2 });
    let orderDetailId = uid.stamp(11);
    let BigId = uid.stamp(11);
    let cartItems = [];
    let orderItems = [];
    let poster;
    cartItems = this.products;
    let foundItem = null;
    for (let key in cartItems) {
      if (cartItems[key].item.id !== null) {
        foundItem = cartItems[key].item.id;
        orderItems.push({
          MovieId: foundItem,
          MovieType: cartItems[key].item.type,
          Id: (orderDetailId = uid.stamp(11)),
          OrderId: BigId,
        });
      }
      
    }
    poster = cartItems[0].item.poster_path;
    let ordernumber;
    ordernumber = orderItems.length;
    ordernumber = ordernumber * 32.5;
    this.order.Id = BigId = uid.stamp(11);
    this.order.Date = this.date;
    this.order.Status = "pending";
    this.order.OrderDetails = orderItems;
    this.order.PosterPath = poster;
    this.order.Amount = ordernumber;
    console.log(this.order);
    this.cartService.addToSystem(this.order);
    let sentItems=[];
    if (localStorage.getItem("sentItems")) {
      sentItems = JSON.parse(localStorage.getItem("sentItems"));
    }
    sentItems.push({ orderId: this.order.Id });
    localStorage.setItem("sentItems", JSON.stringify(sentItems));
    localStorage.removeItem("items");
    this.router.navigateByUrl("/order");
  }
  else if (result==404)
  {
    this.router.navigateByUrl("/login");
    
  }
}

  removeCart(movie: any) {
    var itemId = movie.id;
    var type = "movie";
    let storagItems = JSON.parse(localStorage.getItem("items"));
    let items = storagItems.filter((item) => item.item.id !== itemId);

    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage.getItem("items"));
    this.ngOnInit();
  }
  CheckUserLogin()
  {
    localStorage.setItem("login", "404");
    let session = JSON.parse(localStorage.getItem("login"));
    console.log(session);
    if(session =="" || session=="404")
      {
        console.log("Login failed");
        return 404;
      }
      else if(session=="200")
      {
        console.log("Login good");
        return 200;
      }
  }
  
}
