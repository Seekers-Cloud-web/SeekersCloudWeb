import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-screan-wide-one',
  templateUrl: './screan-wide-one.component.html',
  styleUrls: ['./screan-wide-one.component.scss']
})
export class ScreanWideOneComponent implements OnInit {
  groundUrl='https://i.pinimg.com/originals/a6/07/99/a607999bc938671fc9b2e2f449edecce.jpg';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  loadPortfolioPage() {
    this.router.navigate(['/services']).then();
  }

}
