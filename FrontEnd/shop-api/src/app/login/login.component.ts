import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string = '';
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null,
      [Validators.required,
        Validators.email]),

    password: new FormControl(null,
      [Validators.pattern('^[A-Z][a-z0-9]{3,8}$'), Validators.required]),
  })

  submitLoginForm(loginForm:FormGroup)
  {
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == 'success')
      {
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home']);
      }
      else
      {
        this.error = response.message;
      }
    })
  }

  type:string = "password";
  typePassword(){
    if (this.type == "password"){
      this.type = "type";
    }else{
      this.type = "password";
    }
  }

  ngOnInit(): void {
  }

}
