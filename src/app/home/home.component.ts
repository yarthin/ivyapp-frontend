import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  providers: [AuthService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this._auth.checkCredentials("Login");
  }

  logout(){
    this._auth.logout();
  }
}
