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
  errorMessage: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService
        .getAllAsync()
        .subscribe(
          /* onNext */ p => this.products = p,
          /* onError */ e => {
            console.error(e);
            this.errorMessage = e.message;
          });


    // you can use the async pipe
    // to bind observables directly to your UI
    // this.products = this.productsService.getAllAsync();
  }

  orderProduct(product: Product) {
    this.productsService.orderProduct(product);
  }

}
