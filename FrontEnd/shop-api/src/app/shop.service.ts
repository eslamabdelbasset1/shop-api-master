import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService
{
  constructor(private _HttpClient:HttpClient) { }

  // GET Items <Customer>
  getCustomersDetails():Observable<any>
  {
    return this._HttpClient.get('https://localhost:44311/customer');
  }

  // GET Items <Order>
  getOrders():Observable<any>
  {
    return this._HttpClient.get('https://localhost:44311/order');
  }

  // GET Items <Order Details>
  getOrdersDetails():Observable<any>
  {
    return this._HttpClient.get('https://localhost:44311/orderdetails');
  }

}

