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
  selectedImage: string | ArrayBuffer | null = null;
  variants: string[] = ['default'];
  title: string = '';
  code: string = '';
  selectedOption: string | null = "hot";


  constructor(private productService: ProductService,private router: Router) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImage = e.target!.result;
    };
    reader.readAsDataURL(file);
  }

  addVariant() {
    this.variants.push('default');

  }

  onVariantChange(index: number, newData: string) {
    this.variants[index] = newData;
  }

  removeVariant(index: number) {
    this.variants.splice(index, 1);
  }

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

    // Save the product using the ProductService
    this.productService.addProduct(product);
    this.router.navigate(['/'])

    // You can also clear the form or perform any other necessary actions
    this.title = '';
    this.code = '';
    this.selectedImage = null;
    this.variants = ['default'];
    this.selectedOption = null;
  }

}
