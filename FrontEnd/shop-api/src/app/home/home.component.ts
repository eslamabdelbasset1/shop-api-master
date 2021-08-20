import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers:any [] = [];
  constructor(private _ShopService:ShopService) {
    _ShopService.getCustomersDetails().subscribe((data)=>{
      this.customers = data;
    });
  }

  ngOnInit(): void {
  }

}
