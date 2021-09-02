import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  facebookLinksArray: string[] = [
    '',
    '',
    'https://www.facebook.com/sano.deemantha/',
    'https://www.facebook.com/uvin.weththasinghe/',
    'https://www.facebook.com/tharindu.dhanushka.9279',
    '',
    'https://www.facebook.com/shane.vas/',
    'https://m.facebook.com/visura.prabod',
    'https://www.facebook.com/SNishalaka'
  ];

  linkDingLinksArray: string[] = [
    '',
    '',
    'https://www.linkedin.com/in/sano-deemantha/',
    'https://www.linkedin.com/in/uvin-weththasinghe-259299107/',
    'https://www.linkedin.com/in/tharindu-dhanushka-59137515b/',
    '',
    'https://www.linkedin.com/in/shane-vas-8611b011a/',
    '',
    'https://www.linkedin.com/in/suranjith-nishalaka/'
  ];

  twitterLinksArray: string[] = [
    '',
    '',
    'https://twitter.com/DeemanthaSano',
    'https://twitter.com/Uvin6667',
    '',
    '',
    '',
    '',
    'https://twitter.com/SNishalaka'
  ];

  instagramLinksArray: string[] = [
    '',
    '',
    'https://www.instagram.com/sanodeemantha/',
    'https://www.instagram.com/uvin6667/',
    'https://www.instagram.com/tharindu4003/',
    '',
    'https://www.instagram.com/shane.vas/',
    'https://www.instagram.com/visuraprabod/?hl=en',
    'https://www.instagram.com/snishalaka/'
  ];

  namesList: string[] = [
    '',
    'Yasindu Sathsara',
    'Sano Deemantha',
    'Uvin Weththasinghe',
    'Tharindu Danushka',
    'Chamod Supunsara',
    'Shane Vas',
    'Visura Prabhoda',
    'Suranjith Nishalaka'
  ];
  designationList: string[] = [
    '',
    'IOT Developer',
    'Associate Software Engineer',
    'Associate Software Engineer',
    'Technical Writer',
    'UI-UX Engineer',
    'Software Engineer',
    'Full-Stack Developer',
    'Software Engineer',
  ];

  mySlideImages = [
    'https://image.shutterstock.com/image-vector/profile-user-icon-600w-316419194.jpg',
    'https://eduexpress.s3.us-east-2.amazonaws.com/uvin1.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/sanoj-min.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/uvin-min.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/tharindu-min.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/chamod-min.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/shane-min-min.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/visura.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/main-page/team/sooty-min.jpg',
  ];
  myCarouselImages = ['../assets/images/image1.jpg', '../assets/images/image2.jpg', '../assets/images/image3.jpeg'];

  mySlideOptions = {items: 1, dots: true, nav: true};
  myCarouselOptions = {
    items: 5,
    dots: true,
    nav: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      500: {
        items: 2,
        nav: false
      },
      576: {
        items: 1,
        nav: true
      },
      780: {
        items: 2,
        nav: true
      },
      1018: {
        items: 3,
        nav: true
      },
      1326: {
        items: 4,
        nav: true
      },
      1636: {
        items: 5,
        nav: true
      },
      2560: {
        items: 6,
        nav: true
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToSocial(link: string) {
    window.open(link, '_blank');
  }


}
