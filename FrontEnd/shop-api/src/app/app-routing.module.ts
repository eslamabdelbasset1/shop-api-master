import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
// import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth.guard";
import {RegisterComponent} from "./register/register.component";
import {OrdersComponent} from "./orders/orders.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'orders', canActivate:[AuthGuard], component:OrdersComponent},
  {path: 'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  // {path:'movie-details/:id', component:MovieDetailsComponent},
  // {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
