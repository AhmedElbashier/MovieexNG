import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng";
import ShortUniqueId from "short-unique-id";
import { Order } from "src/app/service/cartservice";
import { OrderService } from "src/app/service/orderservice";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  constructor(
    private router: Router,
    private orderService: OrderService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  orders: Order[];

  order: Order;

  selectedOrders: Order[];

  async ngOnInit() {
    // var result = this.CheckUserLogin();
    // if(result==200)
    // {
    let sentOrders = [];
    sentOrders = JSON.parse(localStorage.getItem("sentItems"));
    let sentpackage = [];
    let foundItem = null;
    for (let key in sentOrders) {
      if (sentOrders[key].orderId !== null) {
        foundItem = sentOrders[key].orderId;
        sentpackage.push(foundItem);
      }
    // }

    console.log(sentpackage);
    this.orders = await this.orderService.getOrders(sentpackage);
    console.log(this.orders);
  }
  // else if (result==404)
  // {
  //   if(confirm("Dear Valued customer.!\n Please Click ( OK ) for Signin\n Or Click (Cancel) to return to home page")) {
  //   this.router.navigateByUrl("/login");
  // }
  // else
  // {
  //   this.router.navigateByUrl("/");
    
  // }
  // }
}

  deleteSelectedOrder() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.orders = this.orders.filter(
          (val) => !this.selectedOrders.includes(val)
        );
        this.selectedOrders = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Orders Deleted",
          life: 3000,
        });
      },
    });
  }

  editOrder(order: Order) {
    this.order = { ...order };
  }

  deleteOrder(order: Order) {
    // this.confirmationService.confirm({
    //   message: "Are you sure you want to delete " + order.Id + "?",
    //   header: "Confirm",
    //   icon: "pi pi-exclamation-triangle",
    //   accept: () => {
    //     this.orders = this.orders.filter((val) => val.Id !== order.Id);
    //     // this.order = {};
    //     this.messageService.add({
    //       severity: "success",
    //       summary: "Successful",
    //       detail: "Order Deleted",
    //       life: 3000,
    //     });
    //   },
    // });
    order.Status ="deleted";
    this.orderService.deleteOrder(order);
    this.ngOnInit();
    // console.log(order);

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
