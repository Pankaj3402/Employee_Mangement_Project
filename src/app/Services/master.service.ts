import { DepartmentModel } from '../Models/DepartmentModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../Models/EmployeeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private empUrl = 'https://localhost:7242/api/Employee';
  private deptUrl = 'https://localhost:7242/api/Department';
  private designationUrl = 'https://localhost:7242/api/Designation';

  constructor(private http: HttpClient) {}

  // ================= EMPLOYEE =================
  GetAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.empUrl);
  }

  DeleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.empUrl}/${id}`);
  }

  GetEmployeeById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.empUrl}/${id}`);
  }

  CreateEmployee(emp: EmployeeModel): Observable<any> {
    return this.http.post(this.empUrl, emp);
  }

  UpdateEmployee(emp: EmployeeModel): Observable<any> {
    return this.http.put(`${this.empUrl}/${emp.employeeId}`, emp);
  }

  // ================= DEPARTMENT =================
  GetAllDepartments(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(`${this.deptUrl}/GetAllDepartments`);
  }

  AddDepartment(dept: DepartmentModel): Observable<any> {
    return this.http.post(`${this.deptUrl}/AddDepartment`, dept);
  }

  UpdateDepartment(dept: DepartmentModel): Observable<any> {
    return this.http.put(`${this.deptUrl}/UpdateDepartment`, dept);
  }

  DeleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.deptUrl}/DeleteDepartment/${id}`);
  }

  // ================= DESIGNATION =================
  GetAllDesignations(): Observable<any[]> {
    return this.http.get<any[]>(this.designationUrl);
  }

  GetDesignationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.designationUrl}/${id}`);
  }

  CreateDesignation(obj: any): Observable<any> {
    return this.http.post(this.designationUrl, obj);
  }

  UpdateDesignation(id: number, obj: any): Observable<any> {
    return this.http.put(`${this.designationUrl}/${id}`, obj);
  }

  DeleteDesignation(id: number): Observable<any> {
    return this.http.delete(`${this.designationUrl}/${id}`);
  }

  GetDesignationByDepartment(deptId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.designationUrl}/filter/${deptId}`);
  }
}