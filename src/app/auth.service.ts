import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  registerUser(values: any) {
    return this.http.post('http://localhost:3000/register', values);
  }
  loginUser(values: any) {
    return this.http.post('http://localhost:3000/login', values);
  }
}
