import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  imports: [],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  constructor(private productService: ProductService) {}
}
