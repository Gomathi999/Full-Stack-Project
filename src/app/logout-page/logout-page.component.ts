import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
