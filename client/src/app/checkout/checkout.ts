import { Component } from '@angular/core';
import { BasketService } from '../basket/services/basket';
import { IBasket, IBasketItem } from '../shared/Models/basket';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { OrderSummary } from '../shared/order-summary/order-summary';

@Component({
  selector: 'app-checkout',
  imports: [OrderSummary,AsyncPipe,RouterLink,CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {

  constructor(public basketService: BasketService){}

  ngOnInit(): void {
    // this.acntService.currentUser$.subscribe({
    //   next:(res) =>{
    //     this.isUserAuthenticated = res;
    //     console.log(this.isUserAuthenticated);
    //   },error:(err) =>{
    //     console.log(`An error occurred while setting isUserAuthenticated flag.`)
    //   }
    // })
  }
  public isUserAuthenticated: boolean = false;


  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }

  incrementItem(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItem(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }

  orderNow(item: IBasket){
   // this.basketService.checkoutBasket(item);
  }
}
