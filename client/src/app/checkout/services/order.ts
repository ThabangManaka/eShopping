import { Injectable } from '@angular/core';
import { ICreateOrder } from '../../shared/Models/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcntService } from '../../account/services/acnt';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class OrderService {


private baseUrl = 'https://localhost:7130/api/v1'; 
constructor( private http: HttpClient, private acntService: AcntService ) 
{} 
  checkoutOrder(order: ICreateOrder): Observable<number> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.acntService.authorizationHeaderValue
      })
    };

    console.log('Order URL:', `${this.baseUrl}/Order`);
    console.log('Order:', order);

    return this.http.post<number>(
      `${this.baseUrl}/Order`,
      order,
      httpOptions
       );
  }
 
}