import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);
  ngOnInit() {
    this.productService.getALl().subscribe({
      next: (data) => {
        this.products = data as Product[];
        this.toast.success('Done');
      },
      error: () => this.toast.error('Error'),
    });
  }

  handleDelete(id: string) {
    if (confirm('xoas')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.toast.success('Done');
          location.reload();
        },
        error: () => this.toast.error('Error'),
      });
    }
  }
}
