import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  qty: number;
  badge?: string;
}

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  templateUrl: './restaurant-menu.html',
  styleUrl: './restaurant-menu.scss',
})
export class RestaurantMenu implements OnInit {
  restaurantName = 'Burger Hub'; // default value
  // typeName = 'ingredients'; // default value
  restaurantCategory = 'Burgers • Salads • Sides';
  restaurantEta = '20–30 min';
  restaurantRating = 4.;
  restaurantReviews = 320;

  // controls visibility of the cart summary popup
  isSummaryOpen = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

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

  menu: MenuItem[] = [
    // Burgers
    {
      id: 1,
      name: 'Classic Burger Meal',
      description: 'Beef patty, cheese, fries & drink.',
      price: 10.99,
      category: 'Burgers',
      qty: 0,
      badge: 'Popular',
    },
    {
      id: 2,
      name: 'Spicy Chicken Burger',
      description: 'Crispy chicken, spicy mayo, lettuce.',
      price: 9.49,
      category: 'Burgers',
      qty: 0,
    },
    {
      id: 3,
      name: 'Veggie Burger',
      description: 'Grilled veggie patty, avocado, tomato.',
      price: 8.99,
      category: 'Burgers',
      qty: 0,
      badge: 'Veg',
    },
    {
      id: 4,
      name: 'Double Cheese Burger',
      description: 'Two beef patties, double cheese.',
      price: 11.99,
      category: 'Burgers',
      qty: 0,
    },

    // Salads & wraps
    {
      id: 5,
      name: 'Garden Salad',
      description: 'Mixed greens, tomato, cucumber, vinaigrette.',
      price: 7.49,
      category: 'Salads & Wraps',
      qty: 0,
    },
    {
      id: 6,
      name: 'Grilled Chicken Salad',
      description: 'Greens, grilled chicken, parmesan.',
      price: 9.29,
      category: 'Salads & Wraps',
      qty: 0,
    },
    {
      id: 7,
      name: 'Chicken Wrap',
      description: 'Grilled chicken, lettuce, ranch in a tortilla.',
      price: 8.49,
      category: 'Salads & Wraps',
      qty: 0,
    },

    // Sides
    {
      id: 8,
      name: 'Fries',
      description: 'Crispy golden fries.',
      price: 3.49,
      category: 'Sides',
      qty: 0,
      badge: 'Side',
    },
    {
      id: 9,
      name: 'Onion Rings',
      description: 'Crispy battered onion rings.',
      price: 4.29,
      category: 'Sides',
      qty: 0,
    },
    {
      id: 10,
      name: 'Chicken Nuggets 6pc',
      description: 'Six crispy chicken nuggets.',
      price: 5.19,
      category: 'Sides',
      qty: 0,
    },
    {
      id: 11,
      name: 'Chicken Nuggets 10pc',
      description: 'Ten crispy chicken nuggets.',
      price: 7.49,
      category: 'Sides',
      qty: 0,
    },
  ];

  get categories(): string[] {
    return Array.from(new Set(this.menu.map(m => m.category)));
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.menu.filter(item => item.category === category);
  }

  increment(item: MenuItem): void {
    item.qty++;
  }

  decrement(item: MenuItem): void {
    if (item.qty > 0) {
      item.qty--;
    }
  }

  get totalItems(): number {
    return this.menu.reduce((sum, item) => sum + item.qty, 0);
  }

  get subtotal(): number {
    return this.menu.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  get cartItems(): MenuItem[] {
    return this.menu.filter(i => i.qty > 0);
  }

  openSummary(): void {
    this.isSummaryOpen = true;
  }

  placeOrder(): void {
    if (!this.cartItems.length) {
      this.isSummaryOpen = false;
      return;
    }

    console.log('Order placed:', this.cartItems);

    // clear cart
    this.menu.forEach(i => (i.qty = 0));
    this.isSummaryOpen = false;

    this.snackBar.open('Order placed successfully!', 'Close', {
      duration: 3000,
    });
  }
}
