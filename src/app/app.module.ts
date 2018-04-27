import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

import { AppAsideComponent } from './components/app-aside/app-aside.component';
import { AppBreadcrumbsComponent } from './components/app-breadcrumbs/app-breadcrumbs.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppSidebarFooterComponent } from './components/app-sidebar-footer/app-sidebar-footer.component';
import { AppSidebarFormComponent } from './components/app-sidebar-form/app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './components/app-sidebar-header/app-sidebar-header.component';
import { AppSidebarMinimizerComponent } from './components/app-sidebar-minimizer/app-sidebar-minimizer.component';
import { APP_SIDEBAR_NAV } from './components/app-sidebar-nav/app-sidebar-nav.component';

//import { SidebarDirective } from './directives/sidebar.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './directives/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './directives/nav-dropdown.directive';
import { ReplaceDirective } from './directives/replace.directive';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// Angular 2 Input Mask
import { TextMaskModule } from 'angular2-text-mask';

// Timepicker
import { TimepickerModule } from 'ngx-bootstrap';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap';

// Ng2-select
import { SelectModule } from 'ng-select';

// datatables
import { DataTablesModule } from 'angular-datatables';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { EventsEditComponent } from './events/events-edit/events-edit.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './reservation/reservation-edit/reservation-edit.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    TextMaskModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SelectModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReservationComponent,
    AppAsideComponent,
    AppBreadcrumbsComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppSidebarFooterComponent,
    AppSidebarFormComponent,
    AppSidebarHeaderComponent,
    AppSidebarMinimizerComponent,
    APP_SIDEBAR_NAV,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    ReplaceDirective,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    DashboardComponent,
    EventsListComponent,
    EventsCreateComponent,
    EventsEditComponent,
    ReservationListComponent,
    ReservationEditComponent,
    ReservationCreateComponent,
  //  ...APP_CONTAINERS,
  //  ...APP_COMPONENTS,
  //  ...APP_DIRECTIVES,
  //  LogginComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
