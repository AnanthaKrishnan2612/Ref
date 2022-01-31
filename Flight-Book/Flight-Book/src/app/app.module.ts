import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './common/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegistrationComponent } from './page/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './page/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './page/admin/admin.component';
import { UserbookingComponent } from './page/userbooking/userbooking.component';
import { AdminnavbarComponent } from './common/adminnavbar/adminnavbar.component';
import { AddflightComponent } from './page/admin/addflight/addflight.component';
import { ModifyflightComponent } from './page/admin/modifyflight/modifyflight.component';
import { BookingComponent } from './page/booking/booking.component';
import { BookinghistoryComponent } from './page/bookinghistory/bookinghistory.component';
import { BooknavbarComponent } from './common/booknavbar/booknavbar.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HistoryComponent } from './page/history/history.component';
import { NgxPrintModule } from 'ngx-print';
import { LogoutComponent } from './page/logout/logout.component';
import { BookingTicket } from './page/bookingTicket';
import { TicketDetails } from './page/ticketDetails';
import { PassangerDetails } from './page/passangerdetails';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    AdminComponent,
    UserbookingComponent,
    AdminnavbarComponent,
    AddflightComponent,
    ModifyflightComponent,
    BookinghistoryComponent,
    BookingComponent,
    BooknavbarComponent,
    HistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  providers: [authInterceptorProviders],
  // exports: [BookingTicket],
  bootstrap: [AppComponent]
})
export class AppModule { }