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
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { BestSellerCardComponent } from './components/best-seller-card/best-seller-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HomeComponent,
    GiftIdeasComponent,
    NewReleasesComponent,
    BestSellersComponent,
    CustomerServiceComponent,
    BestSellerCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatListModule,
    MatSliderModule,
    MatTooltipModule
  ]
})
export class MainModule { }
