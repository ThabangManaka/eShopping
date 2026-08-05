import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
     {path: '',  component:Home, data:{breadcrumb:'Home'}},
     { path: 'store',loadComponent: () =>import('./store/store').then(c => c.Store),data: { breadcrumb: 'Store' } },
      {
    path: 'store/:id',
    loadComponent: () =>
      import('./store/product-details/product-details').then(c => c.ProductDetails),
    data: { breadcrumb: 'Product Details' }
  }
];
