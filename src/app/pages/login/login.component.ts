import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  toastr = inject(ToastrService);
  router = inject(Router);
  authService = inject(AuthService);

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit() {
    if (!this.loginForm.valid) return;

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedUserName = localStorage.getItem('userName') ?? '';

    if (savedEmail === this.loginForm.value.email && savedPassword === this.loginForm.value.password) {
      this.authService.login(Date.now().toString(), savedUserName);
      this.toastr.success('تم تسجيل الدخول بنجاح');
      this.router.navigate(['/']);
    } else {
      this.toastr.error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  }
}
