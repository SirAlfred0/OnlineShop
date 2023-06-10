import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category, Gift, GiftSuggestion } from 'src/app/models/gift-suggestion.model';
import { CommonHttpService } from 'src/app/services/business/common-http.service';

@Component({
  selector: 'app-gift-ideas',
  templateUrl: './gift-ideas.component.html',
  styleUrls: ['./gift-ideas.component.css']
})
export class GiftIdeasComponent implements OnInit {

  minPrice: number = 0;
  maxPrice: number = 10000;
  categories: Category[] = [];
  gifts: Gift[] = [];


  queryForm: FormGroup = new FormGroup({
    SexsualOrientation: new FormControl(null),
    Sexuality: new FormControl(null),
    Hobbies: new FormControl(null),
    GiftOccasion: new FormControl(null),
    Relation: new FormControl(null),
  });

  filterForm: FormGroup = new FormGroup({
    MinPrice: new FormControl(this.minPrice),
    MaxPrice: new FormControl(this.maxPrice),
    CategoryId: new FormControl([]),
  });


  constructor(
    private commonHttpService: CommonHttpService
  ){}


  ngOnInit(): void {
  }

  onSearch(): void
  {
    const model = this.queryForm.value;

    this.commonHttpService.getGiftSuggestions(model).subscribe({
      next: (res: GiftSuggestion) => {
        this.maxPrice = res.maxPrice;
        this.minPrice = res.minPrice;
        this.categories = res.categories;
        this.gifts = res.gifts;
      }
    });
  }

  displayPriceWith(value: number): string
  {
    return value + '$';
  }
}
