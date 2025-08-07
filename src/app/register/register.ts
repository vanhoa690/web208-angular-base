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
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
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
    this.service.register(this.form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/login');
        this.toast.success('ok');
      },
    });
  }
}
