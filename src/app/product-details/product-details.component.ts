import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";
import { Product } from "../products";

@Component({
  selector: 'shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private productsService: ProductsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .flatMap(p => this.productsService.getAsync(+p['id']))
      .subscribe(p => this.product = p);
  }

  goBack() {
    this.router.navigate(['/products']);
    // or
    // history.back();
  }

}
