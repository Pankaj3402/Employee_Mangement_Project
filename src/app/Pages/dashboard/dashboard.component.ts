import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  router = inject(Router);
  masterService = inject(MasterService);

  deptCount: number = 0;
  empCount: number = 0;
  desigCount: number = 0;

  ngOnInit(): void {
    this.loadDashboardData();
  }

  // 🔹 LOAD COUNTS FROM API
loadDashboardData() {

  // ✅ DEPARTMENT COUNT
  this.masterService.GetAllDepartments().subscribe({
    next: (res: any[]) => {
      this.deptCount = res.length;
    },
    error: (err) => console.error(err)
  });

  // ✅ EMPLOYEE COUNT
  this.masterService.GetAllEmployees().subscribe({
    next: (res: any[]) => {
      this.empCount = res.length;
    },
    error: (err) => console.error(err)
  });

  // ✅ DESIGNATION COUNT
  this.masterService.GetAllDesignations().subscribe({
    next: (res: any[]) => {
      this.desigCount = res.length;
    },
    error: (err) => console.error(err)
  });


  }

  // 🔹 NAVIGATION
  goToDepartment() {
    this.router.navigate(['/department']);
  }

  goToEmployee() {
    this.router.navigate(['/employee']);
  }

  goToDesignation() {
    this.router.navigate(['/designation']);
  }
}