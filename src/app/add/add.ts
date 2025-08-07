import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Service } from '../service';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  form: FormGroup;

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
    this.service.add(this.form.value).subscribe({
      next: () => {},
    });
  }
}
