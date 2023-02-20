import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface Order {
    Id: string;
    Date: string;
    OrderDetails: OrderDetails[];
    Status: string;
    PosterPath:string;
    Amount:  string ;
  }
  
  export interface OrderDetails {
    Id:string;
    OrderId: string;  
    Deleted : string;
    MovieId :string;
    MovieType:string;
  } 
export interface Items
{
    itemId;
    type;
}
@Injectable({
  providedIn: 'root'
})

export class CartService {
    systemUrl:string;
    
    constructor(private http: HttpClient){
    this.systemUrl=  'http://localhost:5001/api/v1/';
    }

    items=[];
    
    getItems()
    {
        return this.http.get<any>(localStorage.getItem('items'))
        .toPromise()
        .then(res => <Items[]>res.data)
        .then(data => { return data; });
    }

    async addToSystem(Order: any): Promise<any> {
        return this.http.post<any>(this.systemUrl+"Order", Order).toPromise();
      }

}