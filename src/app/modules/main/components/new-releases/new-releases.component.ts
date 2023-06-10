import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/gift-suggestion.model';
import { NewProduct, NewProducts } from 'src/app/models/new-product.model';
import { CommonHttpService } from 'src/app/services/business/common-http.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent {
  
  minPrice: number = 0;
  maxPrice: number = 10000;
  categories: Category[] = [];
  products: NewProduct[] = [];

  filterForm: FormGroup = new FormGroup({
    MinPrice: new FormControl(this.minPrice),
    MaxPrice: new FormControl(this.maxPrice),
    CategoryId: new FormControl([]),
  });


  constructor(
    private commonHttpService: CommonHttpService
  ){}


  ngOnInit(): void {
    this.getNewProducts();
  }

  getNewProducts(): void
  {
    this.commonHttpService.getNewProducts().subscribe({
      next: (res: NewProducts) => {
        this.maxPrice = res.maxPrice;
        this.minPrice = res.minPrice;
        this.categories = res.categories;
        this.products = res.products;
      }
    });
  }

  displayPriceWith(value: number): string
  {
    return value + '$';
  }
}
