import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string ="https://localhost:7242/api/";

  http = inject(HttpClient);

  getAllDept(){
    return this.http.get(this.apiUrl + "Department/GettAllDepartments")
  }

  constructor() { }
}
