import { Component, inject, OnInit } from '@angular/core';
import { DepartmentModel } from '../../Models/DepartmentModel';
import { MasterService } from '../../Services/master.service';

interface Department {
  name: string;
  description: string;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

newDeptObj: DepartmentModel = new DepartmentModel();

masterService = inject(MasterService)
deptList: DepartmentModel[]=[];
ngOnInit(): void {
  this.GetAllDepartments();
}
onSaveDept(){

}

GetAllDepartments(){
  this.masterService.getAllDept().subscribe({
    next: (result:any)=>{

    }
  })
}



  departments: Department[] = [];
  department: Department = { name: '', description: '' };
  showForm = false;
  editIndex = -1;

  openAddForm() {
    this.department = { name: '', description: '' };
    this.editIndex = -1;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.department = { name: '', description: '' };
    this.editIndex = -1;
  }

  saveDepartment() {
    if (!this.department.name) return;
    if (this.editIndex === -1) {
      this.departments.push({ ...this.department });
    } else {
      this.departments[this.editIndex] = { ...this.department };
    }
    this.closeForm();
  }

  editDepartment(index: number) {
    this.department = { ...this.departments[index] };
    this.editIndex = index;
    this.showForm = true;
  }

  deleteDepartment(index: number) {
    this.departments.splice(index, 1);
  }
}
