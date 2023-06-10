import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BestSellers, Seller } from 'src/app/models/best-sellers.model';
import { Category } from 'src/app/models/gift-suggestion.model';
import { CommonHttpService } from 'src/app/services/business/common-http.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {

  sellers: Seller[] = [];
  categories: Category[] = [];
  minExp: number = 0;
  maxExp: number = 100000;

  filterForm: FormGroup = new FormGroup({
    MinExp: new FormControl(this.minExp),
    MaxExp: new FormControl(this.maxExp),
    CategoryId: new FormControl([])
  });

  constructor(
    private commonHttpService: CommonHttpService
  ) {}


  ngOnInit(): void {
    this.getBestSellers();
  }

  getBestSellers(): void {
    this.commonHttpService.getBestSellers().subscribe({
      next: (res: BestSellers) => {
        this.sellers = res.sellers;
        this.categories = res.categories;
      }
    });
  }

  displayExpWith(value: number): string
  {
    if(value < 12) return value + 'month'

    return Math.floor(value/12) + 'year'
  }
}
