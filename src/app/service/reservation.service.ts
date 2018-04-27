import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

export class Appoint{
    constructor(
      public firstname,
      public lastname,
      public email,
      public telephone,
      public age,
      public event,
      public persons
    ){}
}
@Injectable()
export class ReservationService {

  constructor(
    private _http: Http
  ) { }

  saveReservation(appoint){
      let formData = new FormData();
      formData.append('flag', 'save');
      formData.append('firstname', appoint.firstname);
      formData.append('lastname', appoint.lastname);
      formData.append('email', appoint.email);
      formData.append('telephone', appoint.telephone);
      formData.append('age', appoint.age);
      formData.append('event', appoint.event);
      formData.append('persons', appoint.persons);

      let url = 'http://localhost/angularBackend/reservation.php' ;
      /*this._http.post(url, formData)
      .subscribe(function(data){
          console.log(data['_body']);
      },function(error){
          console.log(error);
      });*/

      return this._http.post(url, formData).map(response=>response["_body"]);
  }
}
