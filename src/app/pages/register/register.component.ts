import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule , CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  toster = inject(ToastrService);
  formData = inject(FormBuilder)
  routerLink = inject(Router);
  registerForm = this.formData.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit() {
    if (this.registerForm.valid) {
      localStorage.setItem('userName', this.registerForm.value.userName!);
      localStorage.setItem('email', this.registerForm.value.email!);
      localStorage.setItem('password', this.registerForm.value.password!);
      this.toster.success('تم التسجيل بنجاح');
      this.registerForm.reset();
      this.routerLink.navigate(['/login']);
    } else {
      this.toster.error('يرجى ملء جميع الحقول بشكل صحيح');
    }}

}
