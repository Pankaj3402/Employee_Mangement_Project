import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { Router } from '@angular/router';
import { EmployeeModel } from '../../Models/EmployeeModel';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeModel[] = [];

  masterService = inject(MasterService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadEmployees();
  }

  // GET
  loadEmployees() {
    this.masterService.GetAllEmployees().subscribe({
      next: (res: EmployeeModel[]) => {
        this.employees = res;
      },
      error: (err) => console.error(err)
    });
  }

  // DELETE
  deleteEmployee(id: number) {
    if (!confirm('Are you sure to delete?')) return;

    this.masterService.DeleteEmployee(id).subscribe({
      next: () => {
        alert('Deleted Successfully');
        this.loadEmployees();
      },
      error: (err) => {
        console.error(err);
        alert('Delete failed');
      }
    });
  }

  // EDIT
  editEmployee(emp: EmployeeModel) {
    this.router.navigate(['/employee-form', emp.employeeId]);
  }
}