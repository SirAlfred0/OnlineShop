import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/gift-suggestion.model';
import { Product } from 'src/app/models/product.model';
import { SubCategory } from 'src/app/models/sub-category.model';
import { ProductHttpService } from 'src/app/services/business/product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  subCategories: SubCategory[] = [];
  minPrice: number = 0;
  maxPrice: number = 10000;
  categories: Category[] = [];
  products: Product[] = [];


  filterForm: FormGroup = new FormGroup({
    MinPrice: new FormControl(this.minPrice),
    MaxPrice: new FormControl(this.maxPrice),
    CategoryId: new FormControl([]),
  });

  constructor(
    private productHttpService: ProductHttpService,
    private activeRoute: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    this.getSubCategories();
    this.getProducts();
  }

  getSubCategories(): void 
  {
    const params = this.activeRoute.snapshot.params;

    this.productHttpService.getSubCategories(params).subscribe({
      next: (res: SubCategory[]) => {
        this.subCategories = res;
      }
    });
  }

  getProducts(): void
  {
    const categoryId = this.activeRoute.snapshot.params;

    this.productHttpService.getProductsByCategory(categoryId).subscribe({
      next: (res: Product[]) => {
        this.products = res;
      }
    });
  }

  onSlideClick(event: any): void 
  {

  }

  displayPriceWith(value: number): string
  {
    return value + '$';
  }
}
