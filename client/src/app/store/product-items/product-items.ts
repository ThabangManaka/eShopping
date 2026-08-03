import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/Models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-items',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './product-items.html',
  styleUrl: './product-items.scss',
})
export class ProductItems {
    @Input() product?: IProduct;


     addItemToBasket(){
    //this.product && this.basketService.addItemToBasket(this.product);
  }
}
