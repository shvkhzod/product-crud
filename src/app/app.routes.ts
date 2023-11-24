import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: ProductPageComponent, title: 'Products'},
  {path: 'createProduct', component: CreateProductComponent}
];
