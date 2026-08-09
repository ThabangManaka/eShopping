import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AcntService } from '../services/acnt';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {
  private fb = inject(FormBuilder);
  private acntService = inject(AcntService);
  private router = inject(Router);

loginForm = this.fb.nonNullable.group({
  email: [''],
  password: ['']
});

  login(): void {

    if (this.loginForm.invalid) {
      return;
    }

    this.acntService.login(this.loginForm.getRawValue()).subscribe({
      next: response => {

        this.acntService.saveToken(response.token);

        this.router.navigateByUrl('/');
      },

      error: error => {
        console.error('Login failed:', error);
      }
    });
  }
}

