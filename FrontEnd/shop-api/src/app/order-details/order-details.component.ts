import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails:any [] = [];
  constructor(private _ShopService:ShopService) {
    _ShopService.getOrdersDetails().subscribe((data)=>{
      this.orderDetails = data;
    });
  }

  ngOnInit(): void {
  }

}
