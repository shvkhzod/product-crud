import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { VariantComponent } from '../variant/variant.component';
import { ProductService } from '../product/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, VariantComponent, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  /**
   * The image selected by the user, stored as a base64 string
   */
  selectedImage: string | ArrayBuffer | null = null;

  /**
   * The list of variants
   */
  variants: string[] = ['default'];

  /**
   * The title of the product
   */
  title: string = '';

  /**
   * The code of the product
   */
  code: string = '';

  /**
   * The selected option of the product
   */
  selectedOption: string | null = "hot";


  constructor(private productService: ProductService,private router: Router) {}

  /**
   * Handle the change event of the file input
   * @param event The event of the file input
   */
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  /**
   * Read the file and store it as a base64 string
   * @param file The file to read
   */
  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImage = e.target!.result;
    };
    reader.readAsDataURL(file);
  }

  /**
   * Add a variant to the list of variants
   */
  addVariant() {
    this.variants.push('default');

  }

  /**
   * Update the data of a variant
   * @param index - index of variant in the array of variants
   * @param newData - new data to replace the old data
   */
  onVariantChange(index: number, newData: string) {
    this.variants[index] = newData;
  }

  /**
   * Remove a variant from the list of variants
   * @param index - index of variant in the array of variants
   */
  removeVariant(index: number) {
    this.variants.splice(index, 1);
  }

  /**
   * Create a product
   */
  createProduct(): void {
    console.log('product added')
    const product = {
      image: this.selectedImage,
      title: this.title,
      code: this.code,
      variants: this.variants,
      selectedOption: this.selectedOption,
      createdAt: new Date()
    };

    /**
     * Add the product to the list of products
     */
    this.productService.addProduct(product);

    /**
     * Navigate to the home page
     */
    this.router.navigate(['/'])


  }

}
