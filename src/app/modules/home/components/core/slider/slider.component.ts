import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({display: 'none'}),
        animate('1s')
      ]),
      transition('* => void', [
        animate('1s', style({display: 'block'}))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  headersSet: string[] = [
    'Expanding possibilities of better tomorrow',
    'Inspiring the intelligence',
    'Where innovation meets excellence',
    'For the generation of the Internet',
    'Solutions with new dimensions',
    'Bringing Excellence To education',
  ];

  imagesArray: string[] = [
    'https://seekerscloud.s3.us-east-2.amazonaws.com/slider-1.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/slider-2.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/slider-3.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/slider-4.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/slider-5.jpg',
    'https://seekerscloud.s3.us-east-2.amazonaws.com/slider-6.jpg'
  ];

  image1 = this.imagesArray[0];
  image2 = this.imagesArray[1];
  image3 = this.imagesArray[2];
  image4 = this.imagesArray[3];
  image5 = this.imagesArray[4];
  image6 = this.imagesArray[5];

  image1State = true;
  image2State = false;
  image3State = false;
  image4State = false;
  image5State = false;
  image6State = false;

  selectedLeftImage = this.imagesArray[4];
  selectedRightImage = this.imagesArray[1];
  tempCount = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.loadSliders();
  }

  private loadSliders() {
    setInterval(() => {

      if (this.tempCount === 0) {
        this.selectedLeftImage = this.imagesArray[4];
        this.selectedRightImage = this.imagesArray[1];
      }

      if (this.tempCount === 1) {
        this.selectedLeftImage = this.imagesArray[0];
        this.selectedRightImage = this.imagesArray[2];
      }

      if (this.tempCount === 2) {
        this.selectedLeftImage = this.imagesArray[1];
        this.selectedRightImage = this.imagesArray[3];
      }

      if (this.tempCount === 3) {
        this.selectedLeftImage = this.imagesArray[2];
        this.selectedRightImage = this.imagesArray[4];
      }

      if (this.tempCount === 4) {
        this.selectedLeftImage = this.imagesArray[3];
        this.selectedRightImage = this.imagesArray[5];
      }

      if (this.tempCount === 5) {
        this.selectedLeftImage = this.imagesArray[4];
        this.selectedRightImage = this.imagesArray[0];
      }

      this.image1State = false;
      this.image2State = false;
      this.image3State = false;
      this.image4State = false;
      this.image5State = false;
      this.image6State = false;

      /*if (this.tempCount === 0) {
        this.image1State = true;
      }
      if (this.tempCount === 1) {
        this.image2State = true;
      }
      if (this.tempCount === 2) {
        this.image3State = true;
      }
      if (this.tempCount === 3) {
        this.image4State = true;
      }
      if (this.tempCount === 4) {
        this.image5State = true;
      }*/

      this.tempCount++;

      if (this.tempCount === 6) {
        this.tempCount = 0;
      }

    }, 10000);
  }

  nextImage(image: string) {
    for (let x = 0; x < this.imagesArray.length; x++) {
      if (this.imagesArray[x] === image) {
        this.tempCount = x;
      }
    }
  }

  previousImage(image: string) {
    for (let x = 0; x < this.imagesArray.length; x++) {
      if (this.imagesArray[x] === image) {
        this.tempCount = x;
      }
    }
  }

}
