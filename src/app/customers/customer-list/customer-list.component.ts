import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { ManageuserService, Customer } from '../../service/manageuser.service' ;

@Component({
  selector: 'app-customer-list',
  providers : [AuthService, ManageuserService],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

   users :any;
  constructor(
    private _auth : AuthService,
    private _manageUser : ManageuserService,
    private _router : Router
  ) { }

  ngOnInit() {
  //    this._auth.checkCredentials();
      this.getAllUsers();

  }

  getAllUsers(){
      var this_callback = this;
      this._manageUser.getAllUsers().subscribe(function(data){
        this_callback.users = JSON.parse(data);
        //console.log(this_callback.users);
          
      }, (error) => {
        console.log(error);
      });

  }

  gotobyid(id){
    var url = "/Home/customers/edit/" + id ;
    this._router.navigate([url]);
  }

}
