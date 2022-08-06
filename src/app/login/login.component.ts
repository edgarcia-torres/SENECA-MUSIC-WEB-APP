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
