import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NotificationService } from '../services/notification/notification.service';
import { NotificationType } from '../services/notification/notification-message';

const jwtHelper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

	// http options used for making API calls
  private httpOptions: any;
 
  // error messages received from the login attempt
  public regErrors: any = [];

  public loginErrors: any = [];


  public errors: any = [];


  // the actual JWT token
  public token: string;

  // the  JWT refresh token
  public refresh: string;
 
  // the token expiration date
  public token_expires: Date;
 
  // the username of the logged in user
  public user_id: number;
 
  

  constructor(private http:HttpClient,private router:Router,private notificationService:NotificationService) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user_token');
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }

  public loginUser(user) {
    this.http.post(`${environment.api_url}/accounts/api/login`, JSON.stringify(user), this.httpOptions).subscribe(
      (data:any)  => {
        this.updateData(data['access'],data['authenticatedUser'])
        this.refresh=data['refresh']
        localStorage.setItem('user_token',data['access'])
        localStorage.setItem('user_refresh',data['refresh'])
        
      },
      err => {
        this.loginErrors=[err.error]
        console.log(err.error)
          }
    );
  }

  public registerUser(user) {
    this.http.post(`${environment.api_url}/accounts/api/register`, JSON.stringify(user), this.httpOptions).subscribe(
      (data:any) => {
      	   this.notificationService.sendMessage({
            message: data.message,
            type: NotificationType.success
          });
      	if (data.user.role===2) {
        	this.router.navigate(['/doctor/login'])
      	}else if(data.user.role===3){
      		this.router.navigate(['/patient/login'])
      	}
       
      },
      err => {

        this.regErrors =[err.error]
          this.notificationService.sendMessage({
            message: 'Error registering',
            type: NotificationType.error
          });
          }
    );
  }



 
 
  private updateData(token,user) {
    this.token = token;
    this.regErrors = [];

    this.loginErrors = [];
 
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.user_id = token_decoded.user_id;

    
    if(parseInt(user.role)===2){
      this.http.get(`${environment.api_url}/accounts/api/doctor/${token_decoded.user_id}`, this.httpOptions).subscribe(
      data => {
        localStorage.setItem('auth_user',JSON.stringify(data))
        this.router.navigate(['/doctor/dashboard'])
      },
      err => {
        console.log(err)
          }
      )

    }else if(parseInt(user.role)===3){
      this.http.get(`${environment.api_url}/accounts/api/patient/${token_decoded.user_id}`, this.httpOptions).subscribe(
      data => {
        localStorage.setItem('auth_user',JSON.stringify(data))
        this.router.navigate(['/patient/dashboard'])
      },
      err => {
        console.log(err)
          }
      )
    }
    else{

    }

    



  }


  public logOut() {
    this.token = null;
    this.token_expires = null;
    this.user_id = null;
    this.refresh = null;
    
    localStorage.clear();
    this.router.navigate(['/'])
    }
  
 
 
}



