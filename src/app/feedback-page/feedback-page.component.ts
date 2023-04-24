import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit{
  name = '';
  email = '';
  contact = '';
  message = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit() {
  
  }
  /* Method for checking the fields are empty or not when we submit a form and showing a popup regarding to that. Then the page is navigate to home page */
  sentFeedbackMessage(){
    if((this.name === '') || (this.email === '')  || (this.contact === '') || (this.message === '')){
      let status = confirm("Please fill all the fields");
    }
  else{
  var status= confirm("Your response has been recorded.");
    if (status==true) {
      this.router.navigate(['home-page']);
       }
   }
  }
  }