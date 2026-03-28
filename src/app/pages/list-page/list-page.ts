import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';

@Component({
  selector: 'app-list-page',
  imports: [],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {
  books: any[] = [];

  constructor(
    private http: HttpClient,
    private bookService: BookService,
  ) {}

  loadBooks = () => {
    this.http.get('http://localhost:3000/books').subscribe({
      next: (data: any) => {
        this.books = data;
      },
    });
  };
  ngOnInit() {
    this.loadBooks();
    this.bookService.reload$.subscribe(() => {
      this.loadBooks();
    });
  }
}
