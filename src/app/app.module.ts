import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app.routing.module';
import {ProductService} from './product/product.service';
import {HttpClientModule} from "@angular/common/http";
import {AddProductComponent} from './product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
