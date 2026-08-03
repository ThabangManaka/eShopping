import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from './services/store';
import { StoreParams } from '../shared/Models/storeParam';
import { IProduct } from '../shared/Models/product';
import { IBrand } from '../shared/Models/brand';
import { IType } from '../shared/Models/type';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProductItems } from './product-items/product-items';

@Component({
  selector: 'app-store',
  imports: [CommonModule,PaginationModule,ProductItems],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store implements OnInit {

    storeParams = new StoreParams();
      products: IProduct[] = [];
      brands: IBrand[] = [];
      types: IType[] =[];
     totalCount= 0;
     sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Ascending', value: 'priceAsc' },
    { name: 'Price: Descending', value: 'priceDesc'}
    ];

  constructor(private storeService: StoreService){}
    @ViewChild('search') searchTerm?: ElementRef;
    ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts(): void {

    this.storeService.getProducts(this.storeParams).subscribe({
      next: (response:any) => {

        this.products = response.data;
        this.storeParams.pageNumber = response.pageIndex;
        this.storeParams.pageSize = response.pageSize;
        this.totalCount = response.count;

      },
      error: (err:any) => {
        console.error(err);
      }
    });

  }
    getBrands(){
    this.storeService.getBrands().subscribe({
      next: response =>{
        this.brands = [{id:'', name:'All'}, ...response]
      },
      error: error =>console.log(error)
    });
  }
  getTypes(){
    this.storeService.getTypes().subscribe({
      next: response =>{
        this.types = [{id:'', name:'All'}, ...response]
      },
      error: error =>console.log(error)
    });
  }
    onBrandSelected(brandId: string){
    this.storeParams.brandId = brandId;
    this.getProducts();
  }
    onTypeSelected(typeId: string){
    this.storeParams.typeId = typeId;
    this.getProducts();
  }

    onSortSelected(sort:string){
    this.storeParams.sort = sort;
    this.getProducts();
  }

    onPageChanged(event:any){
    this.storeParams.pageNumber = event.page;
    this.getProducts();
  }

  onSearch(){
    this.storeParams.search = this.searchTerm?.nativeElement.value;
    this.storeParams.pageNumber = 1;
    this.getProducts();
  }

    onReset(){
    if(this.searchTerm){
      this.searchTerm.nativeElement.value = '';
      this.storeParams = new StoreParams();
      this.getProducts();
    }
  }


}
