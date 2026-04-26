import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  masterService = inject(MasterService);

  designations: any[] = [];

  designation: any = {
    designationId: 0,
    designationName: '',
    departmentId: 0
  };

  showForm = false;
  isEditMode = false;

  ngOnInit(): void {
    this.loadDesignations();
  }

  // ✅ LOAD DATA FROM API
  loadDesignations() {
    this.masterService.GetAllDesignations().subscribe({
      next: (res) => {
        this.designations = res;
      },
      error: (err) => console.error(err)
    });
  }

  // ✅ OPEN FORM
  openAddForm() {
    this.designation = {
      designationId: 0,
      designationName: '',
      departmentId: 0
    };
    this.isEditMode = false;
    this.showForm = true;
  }

  // ✅ CLOSE FORM
  closeForm() {
    this.showForm = false;
  }

  // ✅ SAVE (ADD / UPDATE)
  saveDesignation() {

    if (!this.designation.designationName) return;

    if (this.isEditMode) {
      // UPDATE
      this.masterService.UpdateDesignation(this.designation.designationId, this.designation)
        .subscribe({
          next: () => {
            alert('Updated Successfully');
            this.loadDesignations();
            this.closeForm();
          }
        });
    } else {
      // CREATE
      this.masterService.CreateDesignation(this.designation)
        .subscribe({
          next: () => {
            alert('Added Successfully');
            this.loadDesignations();
            this.closeForm();
          }
        });
    }
  }

  // ✅ EDIT
  editDesignation(item: any) {
    this.designation = { ...item };
    this.isEditMode = true;
    this.showForm = true;
  }

  // ✅ DELETE
  deleteDesignation(id: number) {
    if (!confirm('Are you sure to delete?')) return;

    this.masterService.DeleteDesignation(id).subscribe({
      next: () => {
        alert('Deleted Successfully');
        this.loadDesignations();
      }
    });
  }
}