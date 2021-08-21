import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {RegisterComponent} from "./register/register.component";
import {OrdersComponent} from "./orders/orders.component";
import {LoginComponent} from "./login/login.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'orders', canActivate:[AuthGuard], component:OrdersComponent},
  {path:'order-details',canActivate:[AuthGuard], component:OrderDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
