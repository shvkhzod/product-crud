import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-variant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template:`
  <div class="vInput-wrapper">
    <input [(ngModel)]="variantData" (change)="onVariantChange()" />
    <img src="../../assets/close.svg" (click)="removeVariant()" alt="remove" />
  </div>
`,
  styleUrl: './variant.component.css'
})
export class VariantComponent {
  @Input() variantData: string = 'default';
  @Output() variantChange = new EventEmitter<string>();
  @Output() remove = new EventEmitter<void>();

  onVariantChange() {
    this.variantChange.emit(this.variantData);
  }

  removeVariant() {
    this.remove.emit();
  }
}
