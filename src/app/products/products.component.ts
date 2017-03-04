import { Component, OnInit } from '@angular/core';
import { Product } from "../products";
import { ProductsService } from "../products.service";

@Component({
  selector: 'shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService
        .getAllAsync()
        .subscribe(p => this.products = p);
    //this.products = this.productsService.getAllAsync();
  }

  orderProduct(product: Product) {
    this.productsService.orderProduct(product);
  }

}
