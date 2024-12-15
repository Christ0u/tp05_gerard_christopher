import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import products from './data/products.json';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {
  // Propriétés
  productsList: { id: Number, name: String, category: String, price: number, inStock: Boolean, description: String, rating: number }[] = products;
  keys: Array<keyof typeof this.productsList[number]> = ["id", "name", "category", "price", "inStock", "description", "rating"];
  filteredProducts = [...this.productsList];

  @Input() inStock: boolean = false;
  @Input() maxPrice: number = 100;
  @Input() minRating: number = 0;

  // Méthodes
  ngOnChanges() {
    // Applique les deux filtres en un seul passage
    this.filteredProducts = this.productsList.filter( product => (!this.inStock || product.inStock) && (product.price <= this.maxPrice) && (product.rating >= this.minRating) );
  }


  // constructor() {
  //   for (let productIndex = 0; productIndex < this.productsList.length; productIndex++) {

  //     for (let keyIndex = 0; keyIndex < this.keys.length; keyIndex++) {
  //       console.log(this.productsList[productIndex][this.keys[keyIndex]]);
  //     }

  //   }
  // }
}
