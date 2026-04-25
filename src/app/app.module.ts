
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { DesignationComponent } from './Pages/designation/designation.component';
import { EmployeFormComponent } from './Pages/employe-form/employe-form.component';
import { EmployeeListComponent } from './Pages/employee-list/employee-list.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepartmentComponent,
    DesignationComponent,
    EmployeFormComponent,
    EmployeeListComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
