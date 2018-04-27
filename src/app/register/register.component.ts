import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { ManageuserService, Customer } from "../service/manageuser.service";

@Component({
  selector: 'app-register',
  providers: [AuthService, ManageuserService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public firstname  : string = '' ;
  public lastname   : string = '' ;
  public email      : string = '' ;
  public telephone  : string = '' ;
  public address    : string = '' ;
  public pwd        : string = '' ;
  public confirmpwd : string = '' ;
  public errorMsg   : string = '' ;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _manageUser: ManageuserService
  ) { }

  ngOnInit() {
    this._auth.checkCredentials("Register");
  }
  goto(url){
    this._router.navigate([url]);
  }

  createUser(){
      let user = new Customer('','','','','','','','','','','','','');
      user.firstname  = this.firstname;
      user.lastname   = this.lastname;
      user.email      = this.email;
      user.telephone  = this.telephone;
      user.address    = this.address;
      user.pwd        = this.pwd;

      let this_callback = this;

      if(this.userValidation()){          
          this._manageUser.saveUser(user).subscribe(function(data){
            //console.log('data', data);
            if(data == 'true'){
              this_callback.errorMsg = "sign up ok";
            }
            else{
                this_callback.errorMsg = "sign up fail";
            }        
          }, function(error){});
       }

  }

  userValidation(){
 /*   if(this.firstname.trim() != '' &&
      this.lastname.trim() != '' && 
      this.email.trim() != '' && 
      this.telephone.trim() != '' && 
      this.address.trim() != '' && 
      this.pwd.trim() != '' && 
      this.pwd == this.confirmpwd){ return true;}
    else{
      console.log("error");
      this.errorMsg = 'Errors Exist';
      return false;
    }*/
    if(this.firstname.trim() != '' &&
      this.lastname.trim() != '' && 
      this.email.trim() != '' && 
      this.telephone.trim() != '' && 
      this.address.trim() != '')
      { return true;}
    else{
      console.log("error");
      this.errorMsg = 'Errors Exist';
      return false;
    }
    
  }
}
