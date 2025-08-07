import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { Service } from '../service';
import { ToastService } from '../toast.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.scss',
})
export class Update {
  form: FormGroup;
  id: any;
  private formBuilder = inject(FormBuilder);

  constructor(
    private service: Service,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      type: [''],
      category: [''],
      note: [''],
      dateStart: [''],
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
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getOne(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.form.patchValue(data);
      },
    });
  }
  onSubmit() {
    this.service.update(this.id, this.form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        this.toast.success('ok');
      },
    });
  }
}
