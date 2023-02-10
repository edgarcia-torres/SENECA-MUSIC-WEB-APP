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

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../environments/environment';//allows you to reference your "userAPIBase" environment value using the code: environment.userAPIBase
import jwt_decode from "jwt-decode";

import User from './User';
import RegisterUser from './RegisterUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public getToken(): string | null { ////This method simply pulls the item "access_token" from "localStorage" and returns it.
    return localStorage.getItem('access_token');
  }

  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  public readToken(): User | null {
    const token = localStorage.getItem('access_token');
    console.log("inside read token")

    if (token) {


      console.log("original token: " + token)
      console.log("decoded token : " + jwt_decode(token))


      return jwt_decode(token);
    } else {
      return null;
    }
  }

  public isAuthenticated(): boolean { //pulls "access_token"
    const token = localStorage.getItem('access_token');

    // Note: We can also use helper.isTokenExpired(token) 
    // to see if the token is expired

    if (token) {
      console.log('token exists');
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }


  login(user: User): Observable<any> {//take the user parameter > attempt to "log in"
    // Attempt to login sending the user data via a POST request to environment.userAPIBase/login using the HttpClient service (http).
    console.log("user is : " + JSON.stringify(user))
    environment.userAPIBase
    return this.http.post<any>(environment.userAPIBase + `api/user/login`, user);//return type Observable<any> ==> value from the http.post method call
  }


  logout() {// remove "access_token" from "localStorage"
    localStorage.removeItem('access_token');
  }

  register(registerUser: any): Observable<any> {
    //This method will take the registerUser parameter (type: registerUser) and attempt to "register" using the User API. This is done by 
    //sending the registerUser data via a POST request to environment.userAPIBase/register using the HttpClient service (http).
    // The return value for this method is the return value from the http.post method call (ie: the Observable)
    return this.http.post<any>(environment.userAPIBase + `api/user/register`, registerUser);
  }

}
