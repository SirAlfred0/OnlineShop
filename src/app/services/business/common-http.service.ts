import { Injectable } from '@angular/core';
import { CoreMockService } from '../http/core-mock.service';
import { Observable, of } from 'rxjs';
import { Http } from 'src/app/enum/http';
import { adsModel } from 'src/app/models/ads.model';
import { HomeProduct } from 'src/app/models/home-products.model';
import { GiftSuggestion } from 'src/app/models/gift-suggestion.model';
import { BestSellers } from 'src/app/models/best-sellers.model';
import { NewProduct, NewProducts } from 'src/app/models/new-product.model';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private core: CoreMockService) { }


  getAds(): Observable<adsModel[]>
  {
    return this.core.get(Http.getAds);
  }

  getHomeProducts(): Observable<HomeProduct[]>
  {
    return this.core.get(Http.getHomeProducts);
  }

  getGiftSuggestions(model: any): Observable<GiftSuggestion>
  {
    return this.core.get(Http.getGiftSuggestions);
  }

  getBestSellers(): Observable<BestSellers>
  {
    return this.core.get(Http.getBestSellers);
  }

  getNewProducts(): Observable<NewProducts>
  {
    return this.core.get(Http.getNewProducts);
  }
}
