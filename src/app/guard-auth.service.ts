/**********************************************************************************************
 ** WEB422 – Assignment 6
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students. * 
 * 
 * Name: Edgar David Garcia Torres  Student ID: 104433206  Date: 22/07/2022
 * 
 * *******************************************************************************************/
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';





@Injectable({
  providedIn: 'root'
})
export class GuardAuthService {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
