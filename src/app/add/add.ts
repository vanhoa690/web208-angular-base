import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Service } from '../service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: Service) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      note: ['', [Validators.required]],
      dateStart: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.service.add(this.form.value).subscribe({
      next: () => {},
    });
  }
}
