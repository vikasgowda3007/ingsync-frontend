import { Routes } from '@angular/router';
import { Menu } from './core/menu/menu';
import { Restaurant } from './core/restaurant/restaurant';
import { RestaurantMenu } from './core/restaurant-menu/restaurant-menu';

export const routes: Routes = [
    { path: 'menu', component: Menu, pathMatch: 'full' },
    // { path: 'restaurant-list', component: Restaurant, pathMatch: 'full' },
    // { path: 'restaurant-menu', component: RestaurantMenu, pathMatch: 'full' },
    {
        path: 'restaurant-list',
        loadComponent: () =>
        import('./core/restaurant/restaurant').then(m => m.Restaurant),
    },
    {
        path: 'restaurant-menu',
        loadComponent: () =>
        import('./core/restaurant-menu/restaurant-menu').then(m => m.RestaurantMenu),
    },
    {path: 'ingredients-view', loadComponent: () => import('./core/ingredients-view/ingredients-view').then(m => m.IngredientsView), },
];
