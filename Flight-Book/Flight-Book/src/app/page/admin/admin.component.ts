import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  isLoggedin = false;
  isLoginFailed = false;
  errorMessage = '';
  roles : string[] = [];

  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(loginCheck : any ) : void {
    //const { user_name,password } = this.form;

    if(loginCheck.value.username=="abhijit@gmail.com" && loginCheck.value.password=="abhijit@123")
    {
      this.router.navigate(['/admin/addflight']);
    }
    else{
      alert("Please provide Valid Admin Credentials");
    }
    
  }

  /*manageFlight(){
    this.hideFlightTable = false;
    var temp: any[]; 
    this.adminService.getFlightList().subscribe(listdata => {
      listdata.forEach((ele: any) => {         
            temp.push(ele);        
        });
        this.flightList=temp;
      });
    console.log("Display Add Flight Table = ",this.flightList);
    this.hideManageTable=true;
    console.log("manageFlight Method");
  }*/
}
