import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/Models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
    product?: IProduct;
    quantity = 1;
    
  constructor(
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,

    ){}

    ngOnInit(): void {
    this.loadProduct();
     }

      loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.storeService.getProductById(id).subscribe({
        next:(response) =>{
          this.product = response;
          this.bcService.set('@productDetails', response.name);
          }, error:(error)=>console.log(error)
      });
    }
  }

    addItemToCart(){
    // if(this.product){
    //   this.basketService.addItemToBasket(this.product, this.quantity);
    // }
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
}
