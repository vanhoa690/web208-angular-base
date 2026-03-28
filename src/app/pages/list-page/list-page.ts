import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list-page',
  imports: [],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/books').subscribe({
      next: (data: any) => {
        this.books = data;
      },
    });
  }
}
