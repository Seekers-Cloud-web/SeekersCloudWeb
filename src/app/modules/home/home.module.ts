import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/core/slider/slider.component';
import { QuickAboutComponent } from './components/core/quick-about/quick-about.component';
import { OfferingSliderComponent } from './components/core/offering-slider/offering-slider.component';
import {OwlModule} from "ngx-owl-carousel";
import { ScreanWideOneComponent } from './components/core/screan-wide-one/screan-wide-one.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    QuickAboutComponent,
    OfferingSliderComponent,
    ScreanWideOneComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        OwlModule
    ]
})
export class HomeModule { }
