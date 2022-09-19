import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productSv: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSv.getProducts().subscribe(products => this.products = products);
  }

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productSv.deleteProduct(product.id).subscribe();
  }

}
