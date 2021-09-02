import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/core/slider/slider.component';
import { QuickAboutComponent } from './components/core/quick-about/quick-about.component';
import { OfferingSliderComponent } from './components/core/offering-slider/offering-slider.component';
import {OwlModule} from "ngx-owl-carousel";
import { ScreanWideOneComponent } from './components/core/screan-wide-one/screan-wide-one.component';
import { HomeInquiriesComponent } from './components/core/home-inquiries/home-inquiries.component';
import { MakeInquiriesComponent } from './components/core/make-inquiries/make-inquiries.component';
import {FormsModule} from "@angular/forms";
import { CountsPaneComponent } from './components/core/counts-pane/counts-pane.component';
import {CommonModule} from "../common/common.module";


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    QuickAboutComponent,
    OfferingSliderComponent,
    ScreanWideOneComponent,
    HomeInquiriesComponent,
    MakeInquiriesComponent,
    CountsPaneComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule,
    FormsModule,
    CommonModule,
  ]
})
export class HomeModule { }
