import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerserviceService } from 'src/app/service/passengerservice.service';
import { UserbookingserviceService } from 'src/app/service/userbookingservice.service';
import { BookingTicket } from 'src/app/page/bookingTicket';
import { PassangerDetails } from '../passangerdetails';
import { TicketDetails } from '../ticketDetails';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})


export class BookingComponent implements OnInit {

  flightidList : any;
  passengerList : any;

    eMail:any;
    flightNumber !:any;
    departureDateTime: any;
    returnDateTime: any;
    contactNo:any;
    noOfSeats: any;
    bookingStatus:any;
    ticketCost !:any;

    passengerId:any;
    name !:any;
    gender !:any;
    age !:any;
    seatNo !:any;
    isMealReqd !:any;
    pnrNumber !:any;
   
  travellerList: Array<any> = [];
  customerCheck = false;
  username: any;
  storageFlightList : any;
  totalamount : any;
  travellerDetails : any;
  count:any=0;
  bookingTicket !:BookingTicket;
  passangerDetails !:PassangerDetails;
  ticketDetails !:TicketDetails
  bookingForm !:FormGroup;
  constructor(private router:Router, private activatedRoute : ActivatedRoute,private userService: UserbookingserviceService,private passengerservice:PassengerserviceService,) { 
  this.bookingForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      contactNo: new FormControl(),
      seatNo: new FormControl(),
      isMealReqd: new FormControl()
  });}
  ngOnInit(): void {

    this.username = sessionStorage.getItem('username');
    console.log(this.username);
    this.activatedRoute.paramMap.subscribe(params => {
      var id1 = params.get('id1');
      this.onLoad(id1);
      this.ticketCost = this.flightidList.ticketCost;
      this.flightNumber = this.flightidList.flightNumber;
      console.log(this.ticketCost);
      console.log(this.flightidList);
      
      //localStorage.setItem('flightid',id1);
    });

  
  }

  onLoad(id1 : any){

    this.storageFlightList = sessionStorage.getItem('username');
    this.userService.getSingleList(id1).subscribe(flightidList => {
      console.log("TEST");
      this.flightidList = flightidList;
      
    });
  }

  addPassenger(){
    /*console.log(bookingForm.value.email);
    console.log(bookingForm.value);
    var flightid = localStorage.getItem(this.flightid);
    console.log(flightid);
    this.passengerservice.addPassenger(bookingForm.value.firstName,bookingForm.value.lastName,bookingForm.value.email,bookingForm.value.flightId,bookingForm.value.seat,bookingForm.value.phone).subscribe(passengerList => {
      this.passengerList = passengerList;
    });*/
    // this.ticketCost = this.flightidList.ticketCost;
    // this.username = sessionStorage.getItem('username');
    // this.flightNumber = this.flightidList.flightNumber;
    // this.ticketCost = sessionStorage.getItem('ticketCost');
        this.username = sessionStorage.getItem('username');
    // this.flightNumber = sessionStorage.getItem('flightNumber');
    // this.totalamount = (this.ticketCost) * (bookingForm.value.noOfSeats);
    // bookingForm.value.flightNumber = this.flightNumber;
    // bookingForm.value.username = this.username;
    // bookingForm.value.totalamount = this.totalamount;
    
    this.contactNo=this.bookingForm.value.contactNo;
    this.passangerDetails.name=this.bookingForm.value.name;
    this.passangerDetails.age=this.bookingForm.value.age;
    this.passangerDetails.gender=this.bookingForm.value.gender;
    this.passangerDetails.seatNo=this.bookingForm.value.seatNo;
    this.passangerDetails.isMealReqd=this.bookingForm.value.isMealReqd;
    this.bookingTicket.passangeList.push(this.passangerDetails);
    console.log(this.passangerDetails);
    localStorage.setItem('passangerDetails', JSON.stringify(this.passangerDetails));
    this.customerCheck = true;
    this.count=+1;

  }
  

  confirmBooking(){
    this.totalamount = (this.ticketCost) * (this.count);
    this.username = sessionStorage.getItem('username');
    this.flightNumber = sessionStorage.getItem('flightNumber');
    console.log(this.username + "ONE");
    console.log(this.flightNumber + "two");
    console.log(this.travellerList);
    // this.passangerDetails = localStorage.getItem('passangerDetails');
    // this.bookingTicket.passangetDetails=this.travellerDetails
    console.log(this.travellerList[0]['name']);
    console.log(this.travellerDetails.noOfSeats);
    console.log(this.travellerDetails);
    this.bookingTicket.ticketBooked.flightNumber=this.flightidList.flightNumber;
    this.bookingTicket.ticketBooked.departureDateTime=this.flightidList.departureDateTime;
    this.bookingTicket.ticketBooked.returnDateTime=this.flightidList.returnDateTime;
    this.bookingTicket.ticketBooked.contactNo=this.contactNo;
    this.bookingTicket.ticketBooked.noOfSeats=this.count;
    this.bookingTicket.ticketBooked.bookingStatus="Booked";
    this.bookingTicket.ticketBooked.eMail=this.username;
    this.bookingTicket.ticketBooked.ticketCost=this.totalamount;
   
    this.passengerservice.bookTicket(this.bookingTicket).subscribe(passengerList => {
      this.passengerList = passengerList;
      console.log("1");
      console.log(passengerList);
      if(this.passengerList=='Success'){
        this.router.navigate(['/history']);
      }
    },
      error => {
        console.log("2");
        console.log(error.error.text);
        if(error.error.text == 'Success'){
          this.router.navigate(['/history']);
        }
    });
  }
}
