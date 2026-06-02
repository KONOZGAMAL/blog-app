import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink ,  Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  routerLink = inject(Router);
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  submit() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (this.loginForm.valid) {
      if (email === this.loginForm.value.email && password === this.loginForm.value.password) {
        this.toastr.success('تم تسجيل الدخول بنجاح');
        this.routerLink.navigate(['/']);
        window.location.reload();
      } else {
        this.toastr.error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    }
  }
}
