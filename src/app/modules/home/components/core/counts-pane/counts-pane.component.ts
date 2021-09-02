import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts-pane',
  templateUrl: './counts-pane.component.html',
  styleUrls: ['./counts-pane.component.scss']
})
export class CountsPaneComponent implements OnInit {
  backgroundUrl = 'https://s2.best-wallpaper.net/wallpaper/2880x1800/1709/Keyboard-gloves_2880x1800.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
