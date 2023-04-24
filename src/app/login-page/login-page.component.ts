import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{
  email = '';
  password = '';
  invalidLogin = false
  emessage = '';
  visible:boolean = true;
  changetype:boolean =true;


  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit() {
  }
  /* Method for checking the fields are empty or not when we submit a login form and showing a popup regarding to that. Then the page is navigate to student list */
  checkLogin() {
    if((this.email === '') || (this.password === '')){
      let status = confirm("Please fill all the fields");
    }
    else if (this.loginservice.authenticate(this.email, this.password) )
     {
      var status= confirm("Are you sure want to login?");
      if (status == true) {
      var status= confirm("Login successfully!"); 
      this.router.navigate(['students']);
      console.log("navigate..");
      }
      this.invalidLogin = false;
    } else{
      this.invalidLogin = true;
      this.emessage = '*Login failed!...Please enter valid credentials';
  }
}
/* Defining the method for toggle the eye icon */
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
