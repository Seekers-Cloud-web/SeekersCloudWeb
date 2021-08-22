import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-logo-wrap',
  templateUrl: './logo-wrap.component.html',
  styleUrls: ['./logo-wrap.component.scss'],
  animations: [
    trigger('navSlider', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.2s')
      ]),
      transition('* => void', [
        animate('0.2s', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class LogoWrapComponent implements OnInit {


  navSliderState = false;

  constructor() { }

  selectedRoute = 'Home';

  manageNavSlider(){
    this.navSliderState = !this.navSliderState;
  }

  ngOnInit(): void {
  }

  onClickedOutside($event: any) {
    if (this.navSliderState) {
      this.manageNavSlider();
    }
  }

  setState(name: string) {
    this.selectedRoute = name;
  }

}
