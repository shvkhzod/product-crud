import { Component } from '@angular/core';
import {ProductComponent} from "../app/product/product.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes, RouterLink, RouterLinkActive,  } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product';
}

