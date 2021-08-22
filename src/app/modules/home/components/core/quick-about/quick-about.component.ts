import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-about',
  templateUrl: './quick-about.component.html',
  styleUrls: ['./quick-about.component.scss']
})
export class QuickAboutComponent implements OnInit {

  constructor() { }

  visionState = false;
  servicesState = true;
  missionState = false;
  goalsState = false;

  ngOnInit(): void {
  }

  managePanelVisibility(services: string) {

    this.visionState = false;
    this.servicesState = false;
    this.missionState = false;
    this.goalsState = false;

    if (services === 'SERVICES'){ this.servicesState = true; }
    if (services === 'VISION'){ this.visionState = true; }
    if (services === 'MISSION'){  this.missionState = true; }
    if (services === 'GOALS'){ this.goalsState = true; }

  }

}
