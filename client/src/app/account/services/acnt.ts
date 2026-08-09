import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Observable } from 'rxjs';
import { ILoginRequest } from '../../shared/Models/login';

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AcntService {

  private baseUrl = 'https://localhost:7203/api/Auth';

  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();

  private token = '';

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.token = localStorage.getItem('token') ?? '';
    this.currentUserSource.next(this.isAuthenticated());
  }

  login(model: ILoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.baseUrl}/login`,
      model
    );
  }

  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);

    this.currentUserSource.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = '';

    localStorage.removeItem('token');

    this.currentUserSource.next(false);

    this.router.navigateByUrl('/');
  }

get authorizationHeaderValue(): string {
   const token = this.getToken(); return token ? `Bearer ${token}` : ''; }
}