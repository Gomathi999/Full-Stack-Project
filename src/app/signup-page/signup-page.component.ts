import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit{
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  visible:boolean = true;
  changetype:boolean =true;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit() {
  }
  /* Method for checking the fields are empty or not when we submit a signup form and showing a popup regarding to that. Then the page is navigate to login */
  confirmSignup(){
    if((this.firstName === '') || (this.lastName === '')  || (this.email === '') || (this.password === '') || (this.confirmPassword === '')){
      let status = confirm("Please fill all the fields");
    }
    else{
    var status= confirm("Do you want to register?");
      if (status == true) {
        var status= confirm("Registered Successfully!");
        this.router.navigate(['login']);
        }
      }
    }
  /* Defining the method for toggle the eye icon */
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
