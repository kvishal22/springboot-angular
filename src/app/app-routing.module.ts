import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  //{ path: '', redirectTo: 'login',pathMatch:'full'},
  { path: '',component: LayoutComponent,
  children: [
     { path: 'dashboard', component: DashboardComponent }
  ]
  },
 // { path: '**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
