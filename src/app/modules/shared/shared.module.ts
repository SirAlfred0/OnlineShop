import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SilderComponent } from './components/silder/silder.component';
import { SlideDirective } from './directives/slide.directive';
import { MainSideNavComponent } from './components/main-side-nav/main-side-nav.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ToolbarVisibilityDirective } from './directives/toolbar-visibility.directive';
import { FloatingElementDirective } from './directives/floating-element.directive';



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    SilderComponent,
    SlideDirective,
    MainSideNavComponent,
    ToolbarVisibilityDirective,
    FloatingElementDirective,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent,
    SilderComponent,
    SlideDirective,
    MainFooterComponent,
    MainSideNavComponent,
    FloatingElementDirective
  ]
})
export class SharedModule { }
