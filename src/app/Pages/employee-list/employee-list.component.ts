import { Component } from '@angular/core';

interface Employee {
  name: string;
  email: string;
  department: string;
  designation: string;
  salary: number | null;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { name: 'Amit Sharma', email: 'amit@company.com', department: 'HR', designation: 'Manager', salary: 50000 },
    { name: 'Priya Singh', email: 'priya@company.com', department: 'IT', designation: 'Developer', salary: 60000 }
  ];

  editEmployee(index: number) {
    alert('Edit employee feature (demo only).');
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
}
