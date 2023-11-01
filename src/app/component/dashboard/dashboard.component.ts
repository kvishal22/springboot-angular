import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


    message:String;
    users:any[] = [];

    constructor(private http: HttpClient){}

     ngOnInit(){
       this.hello();
                }

      hello(){
      debugger;
          const headers = this.createAuthHeader();

               if (headers) {
                     this.http.get('http://localhost:8080/api/notanuser/getAll', { headers }).subscribe((res: any) => {
                      console.log(res);
                      this.message = res;
                     });
                   } else {
                     console.log('JWT token is not valid');
                   }
            }
            private createAuthHeader(){
              const jwtToken = localStorage.getItem('loginToken');
               if(jwtToken){
                return new HttpHeaders().set(
                   'Authorization', 'Bearer '+jwtToken
                )
               }else{
                  console.log("unable to create header");
               }
               return null;
            }


}
