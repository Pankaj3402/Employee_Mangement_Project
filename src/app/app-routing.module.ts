import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { DesignationComponent } from './Pages/designation/designation.component';
import { EmployeFormComponent } from './Pages/employe-form/employe-form.component';
import { EmployeeListComponent } from './Pages/employee-list/employee-list.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'employee-form', component: EmployeFormComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'header', component: HeaderComponent },
  { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
