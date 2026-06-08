import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName = signal<string>('');
  isLoggedIn = signal<boolean>(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.userName.set(localStorage.getItem('userName') ?? '');
      this.isLoggedIn.set(localStorage.getItem('token') != null);
    }
  }

  login(token: string, name: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userName', name);
    this.userName.set(name);
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.userName.set('');
    this.isLoggedIn.set(false);
  }
}
