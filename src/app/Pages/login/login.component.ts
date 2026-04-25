import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';   // ✅ FIX

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    phoneNo: ''
  };

  http = inject(HttpClient);   // ✅ FIX

  onLogin() {
    this.http.post("https://localhost:7242/api/Employee/login", this.loginObj)
      .subscribe({
        next: (result: any) => {
          console.log("Login Success", result);
          alert("Login Successful");   // optional
        },
        error: (error: any) => {
          console.log("Error", error);
          alert("Login Failed");
        }
      });
  }
}