import { Component } from '@angular/core';
import { AuthService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flightui';
  private roles: string[] = [];
  isLoggedIn = false;
  
  constructor(private authSer:AuthService){
    //console.log(window.location.pathname);
  }
  
  ngOnInit(): void {
    console.log(window.location.pathname);
  }

  login = this.authSer.loginCheck;
}
