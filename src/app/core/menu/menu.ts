import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-component',
  imports: [Header, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  constructor(private router: Router) {}

  navigateToCustomers() {
    // Logic to navigate to the customers page
    // For example, you might use Angular Router to navigate
    this.router.navigate(['/restaurant-list']);
  }

  navigateToRestaurantList() {
    // Logic to navigate to the restaurant list page
    // For example, you might use Angular Router to navigate
    this.router.navigate(['/restaurant-list'], {
      queryParams: { typeName: 'ingredients' }
    });
  }

  navigateToDistributorList() {
    // Logic to navigate to the distributor list page
    // For example, you might use Angular Router to navigate
    this.router.navigate(['/resta-list']);
  }
}
