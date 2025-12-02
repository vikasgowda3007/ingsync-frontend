import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-ingredients-view',
  imports: [MatCardModule, CommonModule, MatIconModule, MatToolbarModule],
  templateUrl: './ingredients-view.html',
  styleUrl: './ingredients-view.scss',
})
export class IngredientsView implements OnInit {
  items =
    [ {
        'itemName': 'Buns',
        'itemCount': 22
      },
      {
        'itemName': 'Lettuce Leaf',
        'itemCount': 15
      },
      {
        'itemName': 'Mushroom Portion',
        'itemCount': 80
      }
    ];
  restaurantName = 'Burger Hub';

  ngOnInit(): void {
    // 1) Try to get it from navigation state (works when you just navigated)
    // const nav = this.router.getCurrentNavigation();
    // const nameFromState = nav?.extras?.state?.['restaurantName'] as string | undefined;

    // // 2) Try to get it from query params in the URL (works on refresh / direct link)
    const params = new URLSearchParams(window.location.search);
    this.restaurantName = params.get('restaurantName') || this.restaurantName;
    // this.typeName = params.get('typeName') || '';

    // // 3) Pick whichever is available, fallback to default
    // this.restaurantName = nameFromState || nameFromQuery || this.restaurantName;

    console.log('RestaurantMenu loaded with restaurantName:', this.restaurantName);
  }
}
