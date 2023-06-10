import { Component, Input } from '@angular/core';
import { Seller } from 'src/app/models/best-sellers.model';

@Component({
  selector: 'app-best-seller-card',
  templateUrl: './best-seller-card.component.html',
  styleUrls: ['./best-seller-card.component.css']
})
export class BestSellerCardComponent {
  
  @Input('data') data: Seller = {} as Seller;

}
