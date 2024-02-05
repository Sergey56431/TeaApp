import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionComponent} from "./collection/collection.component";
import {ProductPageComponent} from "./product-page/product-page.component";

const routes: Routes = [
  {path: '', component: CollectionComponent},
  {path: ':id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
