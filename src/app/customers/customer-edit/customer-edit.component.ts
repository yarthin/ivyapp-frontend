/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/



import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import { Router, ActivatedRoute } from "@angular/router";

import { ManageuserService, Customer } from '../../service/manageuser.service';

@Component({
  selector: 'app-customer-edit',
  providers:[ManageuserService],
  templateUrl: './customer-edit.component.html',
  styleUrls: [
    '../../../scss/vendors/bs-datepicker/bs-datepicker.scss',
    '../../../scss/vendors/ng-select/ng-select.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CustomerEditComponent implements OnInit{

   // Angular 2 Input Mask

  public dateModel = '';
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public phoneModel = '';
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public taxModel = '';
  public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  public ssnModel = '';
  public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public eyeScriptModel = '';
  public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

  public ccnModel = '';
  public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

  public firstnameModel   = ''; 
  public lastnameModel   = ''; 
  public telephoneModel   = ''; 
  public addressModel   = ''; 
  public emailModel   = ''; 
  public mobileModel  = '';
  public addrModel    = '';
  public genderModel  = '';
  public rateModel    = '';
  public jobModel     = '';
  public statusModel  = '';
  public avatarModel  = '';

  public id:number ;

  // Datepicker

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  // Timepicker

  public hstep:number = 1;
  public mstep:number = 15;
  public ismeridian:boolean = true;
  public isEnabled:boolean = true;

  constructor(
    private _manageUser: ManageuserService ,
    private _router: Router,
    private _activeRouter : ActivatedRoute
  ) { 
    this._activeRouter.params.subscribe(params => {this.id = params.id; });
    //console.log('id', this.id);
  }

  ngOnInit() {
       this.getUserbyid(this.id);

  }

  public mytime:Date = new Date();
  public options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  public toggleMode():void {
    this.ismeridian = !this.ismeridian;
  };

  public update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  };

  public changed():void {
    console.log('Time changed to: ' + this.mytime);
  };

  public clear():void {
    this.mytime = void 0;
  };

  updateUser(){
      let user = new Customer('','','','','','','','','','','','', '');
      user.id         = this.id;
      user.firstname  = this.firstnameModel;
      user.lastname   = this.lastnameModel;
      user.email      = this.emailModel;
      user.telephone  = this.telephoneModel;
      user.address    = this.addrModel;
      user.gender     = this.genderModel;
      user.phone      = this.mobileModel;
      user.hourly_rate= this.rateModel;
      user.state      = this.statusModel;
      user.job        = this.jobModel;
   //   user.avatar     = this.avatarModel;
      
      //user.pwd        = this.pwd;

      let this_callback = this;

      if(this.userValidation()){          
          this._manageUser.updateUser(user).subscribe(function(data){            
            if(data == 'true'){            
                this_callback._router.navigate(['Home/customers/list']);
            }
            else{            
                this_callback._router.navigate(['Home/customers/list']);
            }        
          }, function(error){});
       }

  }

  userValidation(){
    
    if(this.firstnameModel.trim() != '' &&
      this.lastnameModel.trim() != '' && 
      this.emailModel.trim() != '' && 
      this.telephoneModel.trim() != '' && 
      this.addrModel.trim() != '')
      { return true;}
    else{
      console.log("error");      
      return false;
    }
    
  }

  getUserbyid(id){    
    var this_callback = this;
    this._manageUser.getUserByParam('id', id).subscribe(
      function(data){        
        var getData = JSON.parse(data);
        this_callback.firstnameModel  = getData.firstname;
        this_callback.lastnameModel   = getData.lastname;
        this_callback.emailModel      = getData.email;
        this_callback.telephoneModel  = getData.telephone;
        this_callback.addrModel       = getData.address;
        this_callback.mobileModel      = getData.phone;
        this_callback.genderModel     = getData.gender;
        this_callback.rateModel       = getData.hourly_rate;
        this_callback.jobModel        = getData.job;
        this_callback.statusModel     = getData.state;
        this_callback.avatarModel     = getData.avatar;
      }, function(error){}
    );
  }

  delUser(){
    this._manageUser.delUser(this.id).subscribe((data)=>{
      
      if(data == 'true' ){
        this._router.navigate(['Home/customers/list']);
      }
    }, (error)=>{})
  }


  // ng2-select
  public countries: Array<IOption> = [
    {label: 'Belgium', value: 'BE'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Netherlands', value: 'NL'}
  ];

  public selectedCountries: Array<string> = ['BE', 'NL'];
}


