import { Component } from '@angular/core';
import { BasketService } from './services/basket';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { IBasketItem } from '../shared/Models/basket';

@Component({
  selector: 'app-basket',
  imports: [AsyncPipe,RouterLink,CurrencyPipe],
  templateUrl: './basket.html',
  styleUrl: './basket.scss',
})
export class Basket {
    constructor(public basketService: BasketService){}

  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }

  incrementItem(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItem(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }
}
