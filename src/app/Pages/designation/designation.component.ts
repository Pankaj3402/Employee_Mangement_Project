import { Component } from '@angular/core';

interface Designation {
  name: string;
  description: string;
}

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent {

  designations: Designation[] = [];

  designation: Designation = {
    name: '',
    description: ''
  };

  showForm = false;
  editIndex = -1;

  openAddForm() {
    this.designation = { name: '', description: '' };
    this.editIndex = -1;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.designation = { name: '', description: '' };
    this.editIndex = -1;
  }

  saveDesignation() {
    if (!this.designation.name) return;

    if (this.editIndex === -1) {
      this.designations.push({ ...this.designation });
    } else {
      this.designations[this.editIndex] = { ...this.designation };
    }

    this.closeForm();
  }

  editDesignation(index: number) {
    this.designation = { ...this.designations[index] };
    this.editIndex = index;
    this.showForm = true;
  }

  deleteDesignation(index: number) {
    this.designations.splice(index, 1);
  }
}