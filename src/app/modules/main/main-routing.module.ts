import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { GiftIdeasComponent } from './components/gift-ideas/gift-ideas.component';
import { MainLayoutComponent } from 'src/app/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'new',
        component: NewReleasesComponent,
      },
      {
        path: 'customer-services',
        component: CustomerServiceComponent,
      },
      {
        path: 'best-sellers',
        component: BestSellersComponent,
      },
      {
        path: 'gift-ideas',
        component: GiftIdeasComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
