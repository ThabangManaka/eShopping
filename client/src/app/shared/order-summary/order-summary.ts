import { Component } from '@angular/core';
import { BasketService } from '../../basket/services/basket';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [AsyncPipe,CurrencyPipe],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
    constructor(public basketService: BasketService){}
}
