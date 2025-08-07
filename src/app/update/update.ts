import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Service } from '../service';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.scss',
})
export class Update {
  form: FormGroup;
  id!: number | string;

  constructor(private fb: FormBuilder, private service: Service) {
    this.form = this.fb.group({
      name: [''],
      type: [''],
      note: [''],
      dateStart: [''],
      category: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe({
      next: () => {},
    });
  }
}
