import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any [] = [];
  constructor(private _ShopService:ShopService) {
    _ShopService.getOrdersDetails().subscribe((data)=>{
      this.orders = data;
    });
  }


  ngOnInit(): void {
  }

}
