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
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptTokenService implements HttpInterceptor {

  // Initialization

  constructor(private a: AuthService) { }

  // Methods

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes("spotify.com")) {
      // clone the request and use the "setHeaders" property to set an "Authorization" header, etc.
      request = request.clone({// Clone the existing request, and add the authorization header
        setHeaders: {
          Authorization: `JWT ${this.a.getToken()}`
        }
      });
      }
    // Pass the request on to the next handler
    return next.handle(request);
  }

}
