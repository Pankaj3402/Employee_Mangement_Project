import { Component, OnInit, inject } from '@angular/core';
import { DepartmentModel } from '../../Models/DepartmentModel';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  newDeptObj: DepartmentModel = new DepartmentModel();
  deptList: DepartmentModel[] = [];
  isEditMode: boolean = false;

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllDepartments();
  }

  // SAVE / UPDATE
  onSaveDept() {

    if (this.isEditMode) {
      this.masterService.UpdateDepartment(this.newDeptObj).subscribe({
        next: () => {
          alert('Updated Successfully');
          this.afterSave();
        },
        error: () => alert('Update Failed')
      });
    } else {
      this.masterService.AddDepartment(this.newDeptObj).subscribe({
        next: () => {
          alert('Saved Successfully');
          this.afterSave();
        },
        error: () => alert('Save Failed')
      });
    }
  }

  // GET
  getAllDepartments() {
    this.masterService.GetAllDepartments().subscribe({
      next: (res) => {
        this.deptList = res;
      }
    });
  }

  // EDIT
  onEdit(item: DepartmentModel) {
    this.newDeptObj = { ...item };
    this.isEditMode = true;
  }

  // DELETE
  onDelete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.masterService.DeleteDepartment(id).subscribe({
        next: () => {
          alert('Deleted Successfully');
          this.getAllDepartments();
        }
      });
    }
  }

  afterSave() {
    this.resetForm();
    this.getAllDepartments();
  }

  resetForm() {
    this.newDeptObj = new DepartmentModel();
    this.isEditMode = false;
  }
}