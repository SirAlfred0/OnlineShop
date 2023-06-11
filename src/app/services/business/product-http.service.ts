import { Injectable } from '@angular/core';
import { CoreMockService } from '../http/core-mock.service';
import { Observable } from 'rxjs';
import { SubCategory } from 'src/app/models/sub-category.model';
import { Http } from 'src/app/enum/http';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private core: CoreMockService) { }


  getSubCategories(params: any): Observable<SubCategory[]>
  {
    return this.core.get(Http.getSubCategories)
  }

  getProductsByCategory(params: any): Observable<Product[]>
  {
    return this.core.get(Http.getProductsByCategory)
  }
}
