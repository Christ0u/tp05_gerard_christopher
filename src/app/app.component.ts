import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, ProductsListComponent, FooterComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp05_gerard_christopher';

  inStock: boolean = false;
  maxPrice: number = 100;
  minRating: number = 0;

  onInStockChange(value: boolean) {
    this.inStock = value;
  }

  onMaxPriceChange(value: number) {
    this.maxPrice = value;
  }

  onMinRatingChange(value: number)
  {
    this.minRating = value;
  }
}
