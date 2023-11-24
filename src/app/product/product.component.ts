

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
  @Input() productData: any;
  @Output() delete = new EventEmitter<void>();

  filter: string = "";

  setFilter(filter: string): void {
    this.filter = filter;
  }

  onDelete(): void {
    this.delete.emit();
  }

  
}
