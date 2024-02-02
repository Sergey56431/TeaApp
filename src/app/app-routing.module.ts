import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CollectionComponent} from "./components/pages/collection/collection.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductPageComponent} from "./components/pages/product-page/product-page.component";

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'products' , component: CollectionComponent},
  {path: 'products/:id' , component: ProductPageComponent},
  {path: 'order' , component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
