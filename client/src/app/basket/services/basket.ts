import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IBasket, IBasketTotal } from '../../shared/Models/basket';

@Injectable({
  providedIn: 'root',
})
export class Basket {
    baseUrl = 'https://localhost:9010';
  constructor(private http: HttpClient, private router: Router) { }
  private basketSource = new BehaviorSubject<Basket | null>(null);
  basketSource$ = this.basketSource.asObservable();
  private basketTotal = new BehaviorSubject<IBasketTotal | null>(null);
  basketTotal$ = this.basketTotal.asObservable();

    getBasket(username: string){
    return this.http.get<IBasket>(this.baseUrl+'/Basket/GetBasket/rahul').subscribe({
      //update the basketsource so that via observable these values will be available to the subscribers via component
      next:basket=>{
       // this.basketSource.next(basket);
      //  this.calculateBasketTotal();
      }
    });
  }
}
