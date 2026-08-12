import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './core/not-found/not-found';


export const routes: Routes = [
     {path: '',  component:Home, data:{breadcrumb:'Home'}},
     {path: 'not-found', component: NotFound},
     { path: 'store',loadComponent: () =>import('./store/store').then(c => c.Store),data: { breadcrumb: 'Store' } },
      {
    path: 'store/:id',loadComponent: () =>
      import('./store/product-details/product-details').then(c => c.ProductDetails),
    data: { breadcrumb: 'Product Details' }
    },
    { path: 'basket',loadComponent: () =>import('./basket/basket').then(c => c.Basket),data: { breadcrumb: 'basket' } }, 
    { path: 'checkout',loadComponent: () =>import('./checkout/checkout').then(c => c.Checkout),data: { breadcrumb: 'basket' } }, 
    { path: 'login',loadComponent: () =>import('./account/login/login').then(c => c.Login),data: { breadcrumb: 'login' } }, 
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
