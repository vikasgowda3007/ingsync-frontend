import { Component, OnInit } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  imports: [Header, MatButtonModule],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.scss',
})
export class Restaurant implements OnInit {

  private typeName: string = '';

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.typeName = params.get('typeName') || this.typeName;
  }

  navigateToCookies(number: string) {
    const restaurantName = 'Cookies ' + number;
    if (this.typeName === 'ingredients') {
      this.router.navigate(['/ingredients-view'], {
        queryParams: { restaurantName }
      });
    } else {
      this.router.navigate(['/restaurant-menu'], {
        queryParams: { restaurantName }
      });
    }
  }
}
