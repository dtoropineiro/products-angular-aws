import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import {AddProductComponent} from './product/add-product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'add', component: AddProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }