import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  uri = "https://localhost:80";

  constructor(private http: HttpClient) { }

  getUserOrders() {
    return this
      .http
      .get(`${this.uri}/userOrders`);
  }
}
