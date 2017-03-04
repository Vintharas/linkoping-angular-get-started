import { Component, OnInit } from '@angular/core';
import { Product } from "../products";

const products: Product[] = [
{name: 'Wand of Lightning', description: 'A powerful wand of ligthning.', price: 50, imageUrl: '/assets/images/wand.png'},
{name: 'Staff of Fire', description: 'A powerful staff of fire.', price: 150, imageUrl: '/assets/images/staff-of-fire.png'},
{name: 'Sword of Truth', description: 'A beautiful sword of tempered steel.', price: 200, imageUrl: 'assets/images/sword-of-truth.png'},
{name: 'Necklace of Invisibility', description: 'A necklace for thieves, assassins or perverts.', price: 3000, imageUrl: 'assets/images/necklace-of-invisibility.png'},
{name: 'Grand Potion of Healing', description: 'This potion will restore 1000 hp and cure all diseases and curses.', price: 300, imageUrl: 'assets/images/grand-potion-of-healing.png'},
{name: 'Axe of Vindication', description: 'A sharp axe.', price: 200, imageUrl: 'assets/images/axe.png'},
];

@Component({
  selector: 'shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = products;
  }
  
  buyProduct(product: Product) {
    console.log(`You bought product ${product.name} for ${product.price}! Yey!`);
  }

}
