import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './products';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://6323e68f5c1b4357279c887a.mockapi.io/api/info';
  httpOptions  = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url);
  }

  // method
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product, this.httpOptions);
  }

  // updateProduct(product: Product): Observable<any> {
  //   return this.http.put(this.url, product, this.httpOptions);
  // }
  updateProduct(id: number, product: Product) {
    const url = `${this.url}/${id}`;
    return this.http.put(url, product, this.httpOptions);
  }


  deleteProduct(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Product>(url,this.httpOptions);
  }
}
