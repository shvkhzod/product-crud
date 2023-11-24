import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterOutlet, Routes, RouterLink, RouterLinkActive,  } from '@angular/router';
import { ProductService } from '../product/product.service';
import { DatePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterOutlet, RouterLink, RouterLinkActive, ProductComponent, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products: any[];
  filter: string = 'hot';
  searchItem: string = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();

  }

  setFilter(filter: string): void {
    this.filter = filter; // Set the filter variable directly
  }

  deleteProduct(index: number): void {
  console.log('product deleted')
  this.productService.deleteProduct(index);
  this.products = this.productService.getProducts();
  }
}
