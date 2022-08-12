/**********************************************************************************************
 ** WEB422 – Assignment 6
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students. * 
 * 
 * Name: Edgar David Garcia Torres  Student ID: 104433206  Date: 05/08/2022
*
* Angular App (Deployed) Link: https://imaginative-panda-ac45aa.netlify.app
*
* User API (Heroku) Link: https://arcane-fjord-43322.herokuapp.com/ 
* *******************************************************************************************/

import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString: String = "";
  title = 'Web422-ASSIGNMENT6';
  token: any;

  private routerSubscription: any;


//This function must programmatically navigate to the "/search" route with the "searchString" as its "q" query parameter.
  handleSearch(queryParams: any){
    console.log(" FROM SEARCH IS COMING : " + queryParams);
    this.router.navigate(['/search'], { queryParams: { q: queryParams } });
    this.searchString = ""
  }
  constructor( private router: Router,private auth: AuthService ){}


  ngOnInit(): void {


this.router.events.subscribe((event: Event) => {
  if (event instanceof NavigationStart) { // only read the token on "NavigationStart"
    this.token = this.auth.readToken();
  }
});

  }

  logout(){
    console.log("LOG OUT ================================================== OUT ")
    localStorage.clear();
    this.auth.logout();
    this.router.navigate(['/login']);
  }



}
