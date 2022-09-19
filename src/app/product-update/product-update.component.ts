import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @Input() product?: Product;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productSv: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productSv.getProduct(id).subscribe(product => this.product = product);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    console.log(this.product?.id, this.product?.name, this.product?.price);
    if(this.product) {
      this.productSv.updateProduct(this.product.id, this.product).subscribe(() => this.goBack());
    }
  }
}
