import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
