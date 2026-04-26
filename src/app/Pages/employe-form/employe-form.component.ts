import { Component, OnInit, inject } from '@angular/core';
import { EmployeeModel } from '../../Models/EmployeeModel';
import { MasterService } from '../../Services/master.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {

  employee: EmployeeModel = new EmployeeModel();
  employeeId: number = 0;

  masterService = inject(MasterService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.employeeId) {
      this.loadEmployee();
    }
  }

  // ✅ LOAD DATA FOR EDIT
  loadEmployee() {
    this.masterService.GetEmployeeById(this.employeeId).subscribe({
      next: (res: EmployeeModel) => {
        this.employee = res;
      },
      error: (err) => console.error(err)
    });
  }

  // ✅ SAVE (CREATE / UPDATE)
  saveEmployee() {

    if (this.employee.employeeId === 0) {
      // CREATE
      this.masterService.CreateEmployee(this.employee).subscribe({
        next: () => {
          alert('Employee Created');
          this.router.navigate(['/employee-list']);
        },
        error: (err) => console.error(err)
      });
    } else {
      // UPDATE
      this.masterService.UpdateEmployee(this.employee).subscribe({
        next: () => {
          alert('Employee Updated');
          this.router.navigate(['/employee-list']);
        },
        error: (err) => console.error(err)
      });
    }
  }

  // ✅ RESET
  resetForm() {
    this.employee = new EmployeeModel();
  }
}