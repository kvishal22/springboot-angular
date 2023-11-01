import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    users:any[] = [];
    constructor(private http: HttpClient){
      this.loadUsers();
    }
    loadUsers(){
    debugger;
      this.http.get('http://localhost:8080/api/notanuser/check').subscribe((res:any)=>{
        this.users = res.data;
        })
    }
}
