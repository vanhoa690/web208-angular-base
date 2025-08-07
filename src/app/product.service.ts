import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  addProduct(values: any) {
    return this.http.post('http://localhost:3000/products', values);
  }
  updateProduct(id: string | number, values: any) {
    return this.http.put(`http://localhost:3000/products/${id}`, values);
  }
  deleteProduct(id: string | number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getAll() {
    return this.http.get('http://localhost:3000/products');
  }
  getOne(id: string | number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
}
