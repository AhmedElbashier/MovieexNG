import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Order, OrderDetails } from './cartservice';

@Injectable({
    providedIn: 'root'
  })
  
  export class OrderService {
      systemUrl:string;
      
      constructor(private http: HttpClient){
      this.systemUrl=  'http://localhost:5001/api/v1/';
      }
  
  
       getOrders(sentOrders :any): Promise<any> {
        return this.http.get<any>(`${this.systemUrl}Order/byId/${sentOrders}`).toPromise();
      }
      async getOrderDetails(orderId :any): Promise<any> {
        return this.http.get<any>(`${this.systemUrl}Order/OrderDetails/${orderId}`).toPromise();
      }

      deleteOrder(order:any):Promise<any>
      {
        return this.http.put(this.systemUrl+"Order/"+order.id,order).toPromise();
      }
      deleteOrderItem(orderDetail:OrderDetails):Promise<OrderDetails>
      {
        return this.http.put<OrderDetails>(this.systemUrl+"Order/OrderDetails/"+orderDetail.MovieId,orderDetail).toPromise();
      }
        
      
      
  
  }