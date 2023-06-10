import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GiftIdeasComponent } from './components/gift-ideas/gift-ideas.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent,
    GiftIdeasComponent,
    NewReleasesComponent,
    BestSellersComponent,
    CustomerServiceComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class MainModule { }
