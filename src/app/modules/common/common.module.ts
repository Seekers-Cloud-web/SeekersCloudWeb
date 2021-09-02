import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common.component';
import { OurTeamComponent } from './components/share/our-team/our-team.component';
import {OwlModule} from "ngx-owl-carousel";


@NgModule({
    declarations: [
        CommonComponent,
        OurTeamComponent
    ],
    exports: [
        OurTeamComponent
    ],
  imports: [
    CommonRoutingModule,
    OwlModule
  ]
})
export class CommonModule { }
