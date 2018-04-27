/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

*/


import { Component, ViewEncapsulation } from '@angular/core';
import {IOption} from 'ng-select';
import { Router } from "@angular/router";

import { ManageuserService, Customer } from '../../service/manageuser.service';

@Component({
  selector: 'app-customer-create',
  providers: [ManageuserService],
  templateUrl: './customer-create.component.html',
  styleUrls: [
    '../../../scss/vendors/bs-datepicker/bs-datepicker.scss',
    '../../../scss/vendors/ng-select/ng-select.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CustomerCreateComponent {

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
    private _router: Router
  ) { }

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

  saveUser(){
      let user = new Customer('','','','','','','','','','','','', '');
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
      user.avatar     = this.avatarModel;
      
      //user.pwd        = this.pwd;

      let this_callback = this;

      if(this.userValidation()){          
          this._manageUser.saveUser(user).subscribe(function(data){            
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

  // ng2-select
  public countries: Array<IOption> = [
    {label: 'Belgium', value: 'BE'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Netherlands', value: 'NL'}
  ];

  public selectedCountries: Array<string> = ['BE', 'NL'];
}


