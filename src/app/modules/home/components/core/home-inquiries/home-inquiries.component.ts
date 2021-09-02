import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inquiries',
  templateUrl: './home-inquiries.component.html',
  styleUrls: ['./home-inquiries.component.scss']
})
export class HomeInquiriesComponent implements OnInit {

  constructor() { }

  playState = false;

  ngOnInit(): void {
  }

  playVideo() {
    const videoTag: HTMLMediaElement = document.getElementById('video-tag') as HTMLMediaElement;
    videoTag.paused ? videoTag.play() : videoTag.pause();
    this.playState = videoTag.paused ? false : true;
  }

}
