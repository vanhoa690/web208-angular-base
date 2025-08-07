import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  register(values: any) {
    return this.http.post('http://localhost:3000/register', values);
  }
  login(values: any) {
    return this.http.post('http://localhost:3000/login', values);
  }
  add(values: any) {
    return this.http.post('http://localhost:3000/events', values);
  }
  update(id: any, values: any) {
    return this.http.put(`http://localhost:3000/events/${id}`, values);
  }
  delete(id: any) {
    return this.http.delete(`http://localhost:3000/events/${id}`);
  }
  getAll() {
    return this.http.get('http://localhost:3000/events');
  }
  getOne(id: any) {
    return this.http.get(`http://localhost:3000/events/${id}`);
  }
}
