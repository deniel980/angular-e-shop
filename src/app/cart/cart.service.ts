import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrlCart = environment.apiUrl + '/cart';
  private apiUrlCheckout = environment.apiUrl + '/checkout';

  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrlCart, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlCart);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrlCart);
  }

  checkout(products: Product[]): Observable<void> {
    return this.http.post<void>(this.apiUrlCheckout, products);
  }
}
