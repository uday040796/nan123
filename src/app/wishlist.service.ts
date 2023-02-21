import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  myUrl = '../assets/wishlistmock.json';
  constructor(private http: HttpClient) {}

  fetchWishlistDt() {
    return this.http.get(this.myUrl);
  }
}
