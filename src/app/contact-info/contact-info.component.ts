import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit{
  name = '';
  email = '';
  contact = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  /* ngOnInit called automattically by angular when component is initialized */
  ngOnInit() {
  
  }

  /* Method for checking the fields are empty or not when we submit a form and showing a popup regarding to that*/ 
  sentContactMessage(){
    if((this.name === '') || (this.email === '')  || (this.contact === '')){
      let status = confirm("Please fill all the fields");
    }
    else{
      var status= confirm("Your details are sent to our help line team. We will connect with you asap.");
      if (status==true) {
        this.router.navigate(['login']);
      }
    }
  }
}
