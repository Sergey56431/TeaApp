import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    OrderComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        OrderRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
