import { Component, inject } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);

  handleSubmit(values: Product) {
    this.productService.addProduct(values).subscribe({
      next: () => {
        this.toast.success('Done');
        this.router.navigateByUrl('/product/list');
      },
      error: () => this.toast.error('Error'),
    });
  }
}
