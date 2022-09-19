import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import { ProductService } from '../product.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product[] = [];
  constructor(private route: ActivatedRoute,
    private productSv: ProductService,
    private location: Location) { }

  ngOnInit(): void {
  }

  add(name: string, price: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    price = price.trim();
    if(!price) {
      return;
    }
    this.productSv.addProduct({ name, price } as unknown as Product).subscribe(product => this.product.push(product));
    // this.productSv.addProduct({ price } as unknown as Product).subscribe(product => this.product.push(product));
    alert('product added');
  }

  goBack(): void {
    this.location.back();
  }
  
}
