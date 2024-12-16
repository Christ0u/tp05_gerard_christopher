import { Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { BasketComponent } from "./basket/basket.component";

export const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "home", component: ProductsListComponent
    },
    {
        path: "basket", component: BasketComponent
    },
    {
        path: "**", redirectTo: "home"
    }
];