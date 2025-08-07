import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { Service } from '../service';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor(
    private service: Service,
    private toast: ToastService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.service.login(this.form.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.accessToken);
        this.router.navigateByUrl('/');
        this.toast.success('ok');
      },
    });
  }
}
