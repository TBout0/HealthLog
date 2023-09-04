import { Injectable } from '@angular/core';
import { Pages } from 'src/models/Pages';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public currentPage = Pages.register;
  public pages = Pages;
  constructor() {}
  navigate(page: Pages | string) {
    this.currentPage = page as Pages;
    localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
  }
}
