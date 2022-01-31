import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './page/registration/registration.component';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './page/admin/admin.component';
import { UserbookingComponent } from './page/userbooking/userbooking.component';
import { BookingComponent } from './page/booking/booking.component';
import { AddflightComponent } from './page/admin/addflight/addflight.component';
import { ModifyflightComponent } from './page/admin/modifyflight/modifyflight.component';
import { HistoryComponent } from './page/history/history.component';
import { LogoutComponent } from './page/logout/logout.component';

const routes: Routes = [
  {path:'', component:LoginComponent,pathMatch:'full'},
    {path:'registration', component:RegistrationComponent, pathMatch:'full'},
    {path:'login', component:LoginComponent,pathMatch:'full'},
    {path: 'admin', component: AdminComponent },
    {path: 'userbooking', component:UserbookingComponent},
    {path: 'admin/addflight', component:AddflightComponent},
    {path: 'admin/modifyflight', component:ModifyflightComponent},
    {path: 'booking/:id1', component:BookingComponent},
    {path: 'history' , component:HistoryComponent},
    {path: 'logout' , component:LogoutComponent},
    {path: 'search' , component:UserbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
