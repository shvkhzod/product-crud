

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  /**
   * The JSON data of product
   */
  @Input() productData: any;

  /**
   * Event to trigger to delete the product
   */
  @Output() delete = new EventEmitter<void>();

  /**
   * Method for deleting the product
   */
  onDelete(): void {
    this.delete.emit();
  }


}
