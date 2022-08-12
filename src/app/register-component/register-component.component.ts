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
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})

export class RegisterComponentComponent implements OnInit {

  public registerUser = {//this is the data that is synced to the form
    userName: "",
    password: "",
    password2: ""
  }

  public warning = "";
  public  success = false;
  public loading = false;

  private AuthSubscription:any

  constructor(private data: AuthService,  private router:Router) { }

  login(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {  }

  onSubmit(f:NgForm):void{
    this.registerUser = f.value;
   console.log("VALUE FROM FORM IS: ",this.registerUser);
    if(this.registerUser.userName != "" && this.registerUser.password !="" && this.registerUser.password2!="" ){

      this.loading = true;

      this.AuthSubscription = this.data.register(this.registerUser).subscribe(data => {
        let response = data;                                                  //data could have some property 
        if(data ==="User registered successfully"){ 
          console.log("  SUCCESS ", response )
          this.success = true;
          this.warning = "";
          this.loading = false;
        }
      },(err:any) => {
        console.log("===== ERROR OCURRED ====", err.error ); //not executing 
        this.success = false;
        this.warning = err.error;
        this.loading = false;
      }
      );
    }
  }
}
