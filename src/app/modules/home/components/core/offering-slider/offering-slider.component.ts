import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-offering-slider',
  templateUrl: './offering-slider.component.html',
  styleUrls: ['./offering-slider.component.scss']
})
export class OfferingSliderComponent implements OnInit {


  constructor(private router: Router) {
  }

  linkSet: string[] = [
    'MOBILE APPLICATION DEVELOPMENTS',
    'INTERNSHIPS',
    'WEB APPLICATION DEVELOPMENTS',
    'QUALITY ASSURANCE',
    'BUSINESS ANALYSIS',
    'IOT APPLICATION DEVELOPMENT',
    'TESTING',
    'DEPLOYMENTS',
    'GAME DEVELOPMENTS',
    'EMBEDDED SYSTEM DEVELOPMENT',
    'IT CONSULTING',
  ];


  ourServices = [
    'Mobile Application Development',
    'Internships',
    'Web Application Development',
    'Quality Assurance',
    'Business Analysis',
    '(IOT) Development',
    'Application Deployments',
    'Game Development',
    'IT Consulting',
  ];


  mySlideImages = [
    'https://seekersc-loud.s3.us-east-2.amazonaws.com/what-we-offer/mobileappdevelopment.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/intership.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/web+application+dev.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/qulity+assur.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/business+analysis.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/IOT.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/Deploye.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/game.svg',
    'https://seekers-cloud.s3.us-east-2.amazonaws.com/what-we-offer/Consulting.svg'
  ];

  myCarouselOptions = {
    items: 3,
    dots: true,
    nav: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        autoplay: true
      },
      600: {
        items: 2,
        nav: true,
        autoplay: true
      },
      900: {
        items: 3,
        nav: true,
        autoplay: true
      },
      1100: {
        items: 4,
        nav: true,
        autoplay: true
      }
    }
  };

  ngOnInit(): void {
  }

  loadUniqueService(serviceType: string) {
    this.router.navigate(['/service', serviceType]).then();
  }


}
