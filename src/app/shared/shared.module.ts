import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MaxLengthWordPipe} from "./pipes/max-length-word.pipe";
import {ProductComponent} from "./components/product/product.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MaxLengthWordPipe,
    ProductComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaxLengthWordPipe,
    ProductComponent,
  ]
})
export class SharedModule { }
