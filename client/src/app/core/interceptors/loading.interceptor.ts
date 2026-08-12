import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { Loading } from '../services/loading';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: Loading) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.loading();
    return next.handle(request).pipe(
      delay(1000),
      finalize(()=>{
        this.loadingService.idle();
      })
    );
  }
}