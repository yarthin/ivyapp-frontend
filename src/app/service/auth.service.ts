import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

export class User{
    constructor(
      public email: string,
      public pwd: string
    ){}
}

@Injectable()
export class AuthService {

  constructor(
    private _router: Router,
    private _http: Http
  ) { }

  logout(){
      sessionStorage.removeItem('user');
      this._router.navigateByUrl('Login');
  }

  login(user){
      let url = 'http://localhost/angularBackend/login.php';
   //   let url = 'http://vds9638-appsrv.ch.trendhosting.cloud/login.php';
      let formData = new FormData();
      formData.append('email', user.email);
      formData.append('pwd', user.pwd);

      const flag : string = '' ;
      var this_callback = this;
      this._http.post(url, formData)
      .subscribe(function(data){
          console.log(data['_body']);
          
          if(data['_body'] == 'true'){
             sessionStorage.setItem('user', user.email);   
             this_callback._router.navigate(['Home']); 
             
          }
      }, (error)=>{
          console.log(error);
      });
      
     
  }

  checkCredentials(çomponentName){
      //console.log(sessionStorage.getItem('user'));
      if(sessionStorage.getItem('user') === null){
          this._router.navigateByUrl(çomponentName);
      }
      else{
          this._router.navigate(['Home']);
      }
      
  }

}
