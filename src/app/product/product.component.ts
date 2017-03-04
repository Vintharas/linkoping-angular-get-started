import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../products";

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() onBuy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  buyProduct(product: Product) {
    console.log(`You bought product ${product.name} for ${product.price}! Yey!`);
    this.onBuy.emit(product);
  }

}
