import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  public hideFlightTable = false;
  public hideManageTable = false;
  isSuccessful = false;
  private check = false;
  //flightList= any[];
  airlineList : any;
  cityList : any;
  mealList : any;
  statusList:any;
  headers=["Flight Number","Airline","Source","Destination","Departure Time","Arrival Time","Total No of Seats","Price","Meal Type","Flight Date","Status"];
    flightNumber:any;
    airline:any;
    status: any;
    from:any;
    to:any;
    departureDateTime:any;	
    returnDateTime:any;
    scheduledDays:any;
    seats:any;
    instrumentUsed:any;
    toalNoOfRows:any;
    cost:any;
    meals:any;
  responseFlightString = '';
  date1: Date = new Date();
  constructor(private adminService : AdminService,private authser : AuthService,private router:Router) { 
    this.airlineList= ["Jet Airways", "Indigo", "Air-India","King Fisher", "Spice-Jet", "AirAsia"];
    this.cityList=["Coimbatore", "Chennai","Bangalore","Cochin","Hyderabad","Mumbai","Delhi"]; 
    this.mealList=['VEG', 'Non-VEG', 'NONE'];
    this.statusList=[true,false];
    this.authser.loginCheck = false;
  }

  ngOnInit(): void {
    if(this.adminService.updateFlag){
      this.flightNumber = this.adminService.updatedata.flightNumber;
      this.airline = this.adminService.updatedata.airline;
      this.status = this.adminService.updatedata.status;
      this.from = this.adminService.updatedata.from;
      this.to= this.adminService.updatedata.to;
      this.returnDateTime = this.adminService.updatedata.returnDateTime;
      this.departureDateTime = this.adminService.updatedata.departureDateTime;
      this.scheduledDays = this.adminService.updatedata.scheduledDays;
      this.seats = this.adminService.updatedata.seats;      
      this.instrumentUsed = this.adminService.updatedata.instrumentUsed;
      this.toalNoOfRows = this.adminService.updatedata.toalNoOfRows;
      this.cost = this.adminService.updatedata.cost;
      this.meals = this.adminService.updatedata.status;
    }
  }

  addFlight(){
    this.hideFlightTable = true;
    this.hideManageTable=false;
  }

  saveFlight(flightForm : any){

    

    if(flightForm.value.from == flightForm.value.to){
      alert("Both Source and Destination is Same. Please choose other option");
      return;
    }else if(new Date(flightForm.value.departureDateTime).getTime() < this.date1.getTime()){
      alert("Departure Time Should not be less than current Date");
      return;
    }else if(new Date(flightForm.value.returnDateTime).getTime() < this.date1.getTime()){
      alert("Arrival Time Should not be less than current Date");
      return;
    }else if((new Date(flightForm.value.departureDateTime).getTime()) >= (new Date(flightForm.value.returnDateTime).getTime())){
      alert("Arrival Time should be greater than Departure Time");
      return;
    }else{

      if(this.adminService.updateFlag){
        console.log(flightForm.value);
    if(this.check=true){
      flightForm.value.flightNumber=this.flightNumber;
    }   
    this.adminService.updateFlight(flightForm.value).subscribe(
      res =>{
        debugger;
      this.isSuccessful = true;
      this.router.navigate(['/admin/modifyflight']);
      console.log(res);      
     },err => {
      this.responseFlightString = err.error.text;
      this.isSuccessful = true;
      this.router.navigate(['/admin/modifyflight']);
      debugger;
      console.log(err.error.text);
     }); 
    this.hideFlightTable = false;
    this.check=false;
    flightForm.reset();
      }else{
    console.log(flightForm.value);
    if(this.check=true){
      flightForm.value.flightNumber=this.flightNumber;
    }   
    //var saveData = this.adminService.saveFlight(flightForm.value);
    this.adminService.saveFlight(flightForm.value).subscribe(
      res =>{
        debugger;
    /*alert(12345);
    forkJoin(saveData).subscribe(res=>{*/
      this.isSuccessful = true;
      console.log(res);      
     },err => {
      this.responseFlightString = err.error.text;
      this.isSuccessful = true;
      debugger;
      console.log(err.error.text);
     }); 
    this.hideFlightTable = false;
    this.check=false;
    flightForm.reset();
  }
}
}
}
