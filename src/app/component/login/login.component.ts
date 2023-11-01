import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginObj: any = {
      "email": "",
      "password": ""
    };

    constructor(private http: HttpClient, private router: Router){}

    onLogin(){
      console.log('Before HTTP Request');

      this.http.post('http://localhost:8080/api/users/authenticate',this.loginObj).subscribe((res:any)=>{
      debugger;
        if(res!=null){
          alert('login success');
          localStorage.setItem('loginToken',res.Jwt_token);
          this.router.navigateByUrl('/dashboard');
        }else{
          alert('unsuccessful');
        }
            console.log('After HTTP Request');

      })
    }

}
