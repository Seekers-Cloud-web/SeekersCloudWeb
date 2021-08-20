import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';


@NgModule({
  declarations: [
    SolutionComponent
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule
  ]
})
export class SolutionModule { }
