import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ReservationService, Appoint } from "../service/reservation.service";

@Component({
  selector: 'app-reservation',
  providers: [ReservationService],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public email: string;
  public telephone: string;
  public age: number;
  public event: number;
  public persons: number;

  private errorMsg : string;

  constructor(
    private _router: Router,
    private _reservation: ReservationService,
    //private _appoint: Appoint
  ) { }

  ngOnInit() {

  }

  goto(url){
    this._router.navigate([url]);
  }

  createReservation(){
      let appoint = new Appoint('','','','','','','');
      appoint.firstname  = this.firstname ;
      appoint.lastname   = this.lastname ;
      appoint.email      = this.email ;
      appoint.telephone  = this.telephone ;
      appoint.age        = this.age ;
      appoint.event      = this.event ;
      appoint.persons    = this.persons ;


      if(this.reservValidation()){
          this._reservation.saveReservation(appoint).subscribe((data) =>{
            console.log('data', data);
          }, (error) => {});
      }
  }

  reservValidation(){
    if(this.firstname.trim() != '' &&
      this.lastname.trim() != '' && 
      this.email.trim() != '' && 
      this.telephone.trim() != '' && 
      this.age > 17 && 
      this.event != 0 && 
      this.persons != 0  
      )
      { return true;}
    else{
      console.log("error");
      this.errorMsg = 'Errors Exist';
      return false;
    }
  }

}
