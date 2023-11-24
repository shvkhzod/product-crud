import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productsKey = 'products';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getProducts(): any[] {
    if (isPlatformBrowser(this.platformId)) {
      const productsString = localStorage.getItem(this.productsKey);
      return productsString ? JSON.parse(productsString) : [];
    } else {
      return [];
    }
  }



  // Check if the platform is a browser before using localStorage
  addProduct(product: any): void {
    console.log('product added')
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      const products = this.getProducts();
      // const productWithTimestamp = { ...product, createdAt: new Date() };
      products.push(product)
      localStorage.setItem(this.productsKey, JSON.stringify(products));
    }
    console.log('product added')
  }

  deleteProduct(index: number): void {
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      const products = this.getProducts();
      products.splice(index, 1);
      localStorage.setItem(this.productsKey, JSON.stringify(products));
  }
}

}
