import { Component, inject } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  productId: string | null = null;
  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  ngOnInit() {
    this.route.params.subscribe({
      next: (param) => {
        this.productId = param['id'];
        this.toast.success('Done');
      },
      error: () => this.toast.error('Error'),
    });
  }
  handleSubmit(values: Product) {
    if (!this.productId) return;
    this.productService.editProduct(this.productId, values).subscribe({
      next: () => {
        this.toast.success('Done');
        this.router.navigateByUrl('/product/list');
      },
      error: () => this.toast.error('Error'),
    });
  }
}
