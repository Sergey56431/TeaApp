import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { OrderComponent } from './components/pages/order/order.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CollectionComponent } from './components/pages/collection/collection.component';
import { ProductComponent } from './components/common/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MaxLengthWordPipe } from './pipes/max-length-word.pipe';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    CollectionComponent,
    ProductComponent,
    MaxLengthWordPipe,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

