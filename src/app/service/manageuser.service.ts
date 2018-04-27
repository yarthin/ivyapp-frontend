import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
//import { rxjs/add/operator/map };
//import { rxjs/Rx };


export class Customer{
  constructor(
    public id,
    public firstname,
    public lastname,
    public address,
    public telephone,
    public email,
    public gender,
    public phone,
    public hourly_rate,
    public job,
    public state,
    public pwd,
    public avatar,
    
  ){}
}

@Injectable()
export class ManageuserService {
  public msg
  constructor(
    private _http: Http
  ) { }

  saveUser(user){
    let formData = new FormData();
    formData.append('flag', 'save');
    formData.append('firstname', user.firstname);
    formData.append('lastname', user.lastname);
    formData.append('address', user.address);
    formData.append('telephone', user.telephone);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('gender', user.gender);
    formData.append('hourly_rate', user.hourly_rate);
    formData.append('job', user.job);
    formData.append('state', user.state);
    formData.append('avatar', user.avatar);
    

    let url = 'http://localhost/angularBackend/manageUser.php' ;
    
    return this._http.post(url, formData).map(response=>response["_body"]);
    
  }

  updateUser(user){
    let formData = new FormData();
    formData.append('flag', 'update');
    formData.append('id', user.id);
    formData.append('firstname', user.firstname);
    formData.append('lastname', user.lastname);
    formData.append('address', user.address);
    formData.append('telephone', user.telephone);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('gender', user.gender);
    formData.append('hourly_rate', user.hourly_rate);
    formData.append('job', user.job);
    formData.append('state', user.state);
    formData.append('avatar', user.avatar);

    let url = 'http://localhost/angularBackend/manageUser.php' ;
    
    return this._http.post(url, formData).map(response=>response["_body"]);
  }

  delUser(id){
    let formData = new FormData();
    formData.append('flag', 'del');
    formData.append('id', id);    

    let url = 'http://localhost/angularBackend/manageUser.php';
    return this._http.post(url, formData).map(response=>response["_body"]);
  }

  getAllUsers(){
    let formData = new FormData();
    formData.append('flag', 'all');

    let url = 'http://localhost/angularBackend/manageUser.php';
    return this._http.post(url, formData).map(response=>response["_body"]);
  }

  getUserByParam(paramName, paramVal){
    let formData = new FormData();
    formData.append('flag', 'get');
    formData.append('paramName', paramName);
    formData.append('paramVal', paramVal);

    let url = 'http://localhost/angularBackend/manageUser.php';
    return this._http.post(url, formData).map(response=>response["_body"]);
  }
}
