import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { EventsEditComponent } from './events/events-edit/events-edit.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './reservation/reservation-edit/reservation-edit.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';



const routes: Routes = [
    { path: 'Login', component: LoginComponent},
    { path : 'Register', component : RegisterComponent},
    { path : 'Home', 
      component: HomeComponent,
      children: [
        {
          path: '',
          component: DashboardComponent
        },
        {
          path: 'customers/list',
          component: CustomerListComponent
        },
        {
          path: 'customers/create',
          component: CustomerCreateComponent
        },
        {
          path: 'customers/edit/:id',
          component: CustomerEditComponent
        },
        {
          path: 'events/list',
          component: EventsListComponent
        },
        {
          path: 'events/create',
          component: EventsCreateComponent
        },
        {
          path: 'events/edit/:id',
          component: EventsEditComponent
        },
        {
          path: 'reservation/list',
          component: ReservationListComponent
        },
        {
          path: 'reservation/create',
          component: ReservationCreateComponent
        },
        {
          path: 'reservation/edit/:id',
          component: ReservationEditComponent
        }
      ]
    },
    { path : 'Reservation', component: ReservationComponent},
    { path : '', redirectTo : 'Login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
