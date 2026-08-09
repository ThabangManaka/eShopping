import { Component } from '@angular/core';
import { BasketService } from '../basket/services/basket';
import { Basket, IBasket, IBasketItem } from '../shared/Models/basket';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { OrderSummary } from '../shared/order-summary/order-summary';
import { OrderService } from './services/order';
import { ICreateOrder } from '../shared/Models/order';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-checkout',
  imports: [OrderSummary,AsyncPipe,RouterLink,CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {

  constructor(public basketService: BasketService, public orderService : OrderService,private router: Router){}
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

 orderNow(item: IBasket): void 
 { const order: ICreateOrder =
   { userName: item.userName, 
    totalPrice: item.totalPrice,
     firstName: 'Thabang', lastName: 'Manaka',
      emailAddress: 'Thabang@gmail.com', addressLine: '123 Main Street', 
      country: 'South Africa', state: 'Gauteng', zipCode: '2194', 
      cardName: 'Thabang Manaka', cardNumber: '4111111111111111', 
      expiration: '12/28', cvv: '123', paymentMethod: 1 }; 
      console.log('Order being sent:', order); 
      this.orderService.checkoutOrder(order).subscribe({
         next: response => { console.log('Order created successfully:', response); 
        
           this.basketService.clearBasket();
          this.router.navigateByUrl('/');
         },
             error: error => {
            console.error('Order checkout failed:', error);
            console.error('Status:', error.status);
            console.error('URL:', error.url);
            console.error('Response:', error.error);
    }
  }); }
}
