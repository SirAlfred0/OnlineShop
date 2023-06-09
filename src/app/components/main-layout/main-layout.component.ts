import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Params, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonHttpService } from 'src/app/services/business/common-http.service';
import { adsModel } from 'src/app/models/ads.model';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class MainLayoutComponent implements OnInit {

  ads: adsModel[] = [];

  sideNavToggleStatus: boolean = false;

  constructor(
    private commonHttpService: CommonHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAds();

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        this.sideNavToggleStatus = false;
    });
  }

  getAds(): void {
    this.commonHttpService.getAds().subscribe({
      next: (res: adsModel[]) => {
        this.ads = res;
      }
    });
  }

  onSlideClick(item: adsModel)
  {
    this.router.navigate(['/' + item.route], {queryParams: item.params as Params});
  }

  onSideNavToggle()
  {
    this.sideNavToggleStatus = !this.sideNavToggleStatus
  }
}

