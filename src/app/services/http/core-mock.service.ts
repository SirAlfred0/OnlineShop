import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http } from 'src/app/enum/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CoreMockService {

  constructor() { }

  get(httpRoute: Http): Observable<any>
  {
    switch(httpRoute)
    {
      case Http.getAds:
        return of(DataService.ads)
      case Http.getHomeProducts:
        return of(DataService.homeProducts)
      case Http.getGiftSuggestions:
        return of(DataService.giftSuggestions)
      case Http.getBestSellers:
        return of(DataService.bestSellers)
      case Http.getNewProducts:
        return of(DataService.newProducts)
      case Http.getSubCategories:
        return of(DataService.subCategories)
      case Http.getProductsByCategory:
        return of(DataService.productsByCategory)
    }
  }
}
