import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-modifyflight',
  templateUrl: './modifyflight.component.html',
  styleUrls: ['./modifyflight.component.css']
})
export class ModifyflightComponent implements OnInit {

  headers=["Flight Number","Airline","Source","Destination","Departure Time","Arrival Time","Seats","Price","Schedule-Days","Meals","Status",];
  flightList: any[] = [];
  hideFlightTable = false;
  hideManageTable = false;

  status:any;
  flightNumber:any; 
  airline:any; 
  from:any;
  to : any;
  departureDateTime : any;
  returnDateTime : any; 
  scheduledDays:any;
  seats :any;
  instrumentsUsed:any
  ticketCost : any; 
  meals:any;
  totalNoOfRows:any;
  constructor(private adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
    this.manageFlight();
  }

  manageFlight(){
    this.hideFlightTable = false;
    var temp: any[]; 
    this.adminService.getFlightList().subscribe(listdata => {
      console.log(listdata);
      /*listdata.forEach((ele: any) => {         
            temp.push(ele);        
        });*/
        this.flightList=listdata;
      });
    console.log("Display Add Flight Table = ",this.flightList);
    this.hideManageTable=true;
    console.log("manageFlight Method");
  }

  updateFlight(row: { flightid: any; flightname: any; source: any; destination: any; departuretime: any; arrivaltime: any; seat: any; price: any; meals: any; status: any;instrumentUsed:any,ticketCost:any;noOfTotalRows:any; }){
    this.adminService.updatedata = row;
    this.adminService.updateFlag = true;
    this.router.navigate(['/admin/addflight']);
  }

  blockFlight(flightNumber : any){
    console.log(flightNumber)
    this.adminService.blockFlight(flightNumber).subscribe(data => {
      console.log("Success");
      this.manageFlight();
     
    });
  }
    unblockFlight(flightNumber : any){
      console.log(flightNumber)
      this.adminService.unblockFlight(flightNumber).subscribe(data => {
        console.log("Success");
        this.manageFlight();
        this.router.navigate(['/admin/modifyflight']);
      });

  }
}
