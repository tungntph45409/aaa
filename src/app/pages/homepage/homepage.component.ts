import { Product, ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];
  ProductService = inject(ProductService);
  toast = inject(HotToastService);
  //////////////////////////

  ngOnInit() {
    this.ProductService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        this.toast.error('error:' + e.message);
      },
    });
  }
}
