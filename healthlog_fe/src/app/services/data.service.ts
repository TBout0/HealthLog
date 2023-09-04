import { Injectable } from '@angular/core';
import User from 'src/models/User';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public currentUser: User | null = null;
  public loggedIn = false;
  constructor(private ui: UiService) {
    this.getPersistUser();
  }
  getPersistUser(): void {
    let currentUser = localStorage.getItem('currentUser');
    let page = localStorage.getItem('currentPage');
    if (page) {
      this.ui.currentPage = JSON.parse(page);
    }
    if (currentUser) {
      this.currentUser = JSON.parse(currentUser);
      this.loggedIn = true;
    }
  }
  setPersistUser(): void {
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
  deletePersistUser(): void {
    localStorage.removeItem('currentUser');
  }
}
