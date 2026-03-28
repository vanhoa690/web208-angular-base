import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book-service';

@Component({
  selector: 'app-add-page',
  imports: [ReactiveFormsModule],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage {
  // form
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private bookService: BookService,
  ) {
    this.form = this.fb.group({
      title: '',
    });
  }

  submitForm = () => {
    console.log(this.form.value);
    this.http.post('http://localhost:3000/books', this.form.value).subscribe({
      next: () => {
        alert('them thanh cong');
        this.bookService.triggerRefresh();
      },
    });
  };
}
