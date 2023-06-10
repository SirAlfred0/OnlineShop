import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeProduct } from 'src/app/models/home-products.model';
import { CommonHttpService } from 'src/app/services/business/common-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeProducts: HomeProduct[] = []

  constructor(
    private commonHttpService: CommonHttpService,
    private router: Router
  ) 
  {}


  ngOnInit(): void {
    this.getHomeProductsList();
  }

  getHomeProductsList(): void 
  {
    this.commonHttpService.getHomeProducts().subscribe({
      next: (res: HomeProduct[]) => {
        this.homeProducts = res;
      }
    });
  }

  onSlideClick(event: any)
  {
    console.log(event);
    this.router.navigate([''], { queryParams: event.params});
  }
}
