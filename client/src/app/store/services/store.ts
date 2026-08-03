import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreParams } from '../../shared/Models/storeParam';
import { IBrand } from '../../shared/Models/brand';
import { IType } from '../../shared/Models/type';
import { IProduct } from '../../shared/Models/product';
import { IPagination } from './pagination';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  constructor(private http: HttpClient) { }

    baseUrl = 'https://localhost:7005/api/v1/';

     getProductById(id:string){
     return this.http.get<IProduct>(this.baseUrl + 'Catalog/GetProductById/' +id );
    }
     getProducts(storeParams: StoreParams){
    let params = new HttpParams();
    if(storeParams.brandId){
      params = params.append('brandId', storeParams.brandId);
    }
    if(storeParams.typeId){
      params = params.append('typeId', storeParams.typeId);
    }

    if(storeParams.search){
      params = params.append('search', storeParams.search);
    }

    params = params.append('sort', storeParams.sort);
    params = params.append('pageIndex', storeParams.pageNumber);
    params = params.append('pageSize', storeParams.pageSize);

    return this.http.get<IPagination<IProduct[]>>(this.baseUrl+'Catalog/GetAllProducts', {params});
  }
    getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'Catalog/GetAllBrands');
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'Catalog/GetAllTypes');
  }

}
