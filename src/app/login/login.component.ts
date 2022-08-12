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
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={userName: "", password: "", _id: ""}
  warning =""
  loading =false

  private AuthSubscription:any

  constructor(private data: AuthService, private router:Router) { }

  register(){
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm):void{
    this.user = f.value
    console.log("value from form is: ", this.user);

    this.AuthSubscription = this.data.login(this.user).subscribe(
      (success:any) => {
        this.loading = false
        // store the returned token 
        console.log("ACCESS TOKEN IS: ", success)
        this.data.setToken(success.token); // worked
        this.router.navigate(['/newReleases']);
      },
      (err:any) => {
        this.warning = err.error;
        this.loading = false
        console.log("===== ERROR OCURRED ====", err.error );
      }
    );
  }
}
