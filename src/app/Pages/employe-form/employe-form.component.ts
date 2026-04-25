import { Component } from '@angular/core';

interface Employee {
  name: string;
  email: string;
  department: string;
  designation: string;
  salary: number | null;
}

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent {
  employee: Employee = {
    name: '',
    email: '',
    department: '',
    designation: '',
    salary: null
  };

  saveEmployee() {
    // Placeholder for save logic
    alert('Employee saved! (Demo only)');
    this.resetForm();
  }

  resetForm() {
    this.employee = {
      name: '',
      email: '',
      department: '',
      designation: '',
      salary: null
    };
  }
}
