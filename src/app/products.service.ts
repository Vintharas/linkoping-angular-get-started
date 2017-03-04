import { Injectable } from '@angular/core';
import { Product } from "./products";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs';
// normally you only import what you use
// import "rxjs/add/operator/map";

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getAll(): Product[] {
    return [];
  }

  getAllAsync(): Observable<Product[]> {
    return this.http
      .get('http://localhost:3000/articles')
      .map(r => {
        // throw new Error('Waddafuck!');
        return r.json();
      }); // delay to illustrate longer network call
  }

  orderProduct(product: Product) {
    console.log(`Ordering ${product.name} from the shop`);
  }

  getAsync(id: number): Observable<Product> {
    return this.http
      .get(`http://localhost:3000/articles/${id}`)
      .map(r => {
        // throw new Error('Waddafuck!');
        return r.json();
      }); // delay to illustrate longer network call
  }
}
