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
    'TEACHING',
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
    'Teaching',
    'Internships',
    'Web Application Development',
    'Quality Assurance',
    'Business Analysis',
    '(IOT) Development',
    'Deployments',
    'Game Development',
    'Embedded System Development',
    'IT Consulting',
  ];


  mySlideImages = [
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/mobileappdevelopment.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/teaching.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/intership.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/web+application+dev.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/qulity+assur.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/business+analysis.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/IOT.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/Deploye.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/game.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/embedded.svg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/what-we-offer/Consulting.svg'
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
