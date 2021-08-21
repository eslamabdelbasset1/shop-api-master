import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private _HttpClient:HttpClient) { }
  getCustomersDetails():Observable<any>
  {
    return this._HttpClient.get('https://localhost:44311/api/customer');

  }

  getOrders():Observable<any>
  {
    return this._HttpClient.get('https://localhost:44311/api/order');

  }

  getOrdersDetails():Observable<any>
  {
    return this._HttpClient.get('https://localhost:44311/api/orderdetails');

  }

}

