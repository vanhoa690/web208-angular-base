import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Service } from '../service';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  form: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor(
    private service: Service,
    private toast: ToastService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', [Validators.required]],
      category: ['', [Validators.required]],
      note: ['', [Validators.required]],
      dateStart: ['', [Validators.required]],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get type() {
    return this.form.get('type');
  }
  get category() {
    return this.form.get('category');
  }

  get note() {
    return this.form.get('note');
  }
  get dateStart() {
    return this.form.get('dateStart');
  }

  onSubmit() {
    this.service.add(this.form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        this.toast.success('ok');
      },
    });
  }
}
