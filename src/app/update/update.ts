import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Service } from '../service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.scss',
})
export class Update {
  form: FormGroup;
  id!: number | string | null;

  constructor(
    private fb: FormBuilder,
    private service: Service,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: [''],
      type: [''],
      note: [''],
      dateStart: [''],
      category: [''],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (!this.id) return;
    this.service.getOne(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.form.patchValue(data); //
      },
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (!this.id) return;
    this.service.update(this.id, this.form.value).subscribe({
      next: () => {},
    });
  }
}
