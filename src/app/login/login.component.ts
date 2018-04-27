import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, User } from '../service/auth.service';

@Component({
  selector: 'app-login',
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email  :string;
  public pwd    :string;
  public user   = new User('','');


  constructor( 
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.checkCredentials('Login');
  }

  goto(url){
    this._router.navigate([url]);
  }

  login(){
      this.user.email = this.email;
      this.user.pwd   = this.pwd;
      this._authService.login(this.user);
  }

}
