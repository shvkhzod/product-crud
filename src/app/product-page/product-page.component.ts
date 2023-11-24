import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterOutlet, Routes, RouterLink, RouterLinkActive,  } from '@angular/router';
import { ProductService } from '../product/product.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterOutlet, RouterLink, RouterLinkActive, ProductComponent, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  /**
   * The list of products
   */
  products: any[];

  /**
   * The filter to apply to the products
   */
  filter: string = 'hot';

  /**
   * The product name to search for
   */
  searchItem: string = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();

  }

  /**
   * Apply filter to the search results
   * @param filter The filter to apply
   */
  setFilter(filter: string): void {
    this.filter = filter; // Set the filter variable directly
  }

  /**
   * Delete a product
   * @param index The index of the product to delete
   */
  deleteProduct(index: number): void {
    console.log('product deleted')
    this.productService.deleteProduct(index);
    this.products = this.productService.getProducts();
    }
}
