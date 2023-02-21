import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  myUrl = "../assets/cartmock.json";
  constructor(private http : HttpClient) { }

  fetchCartDt(){
    return this.http.get(this.myUrl);
  }
}
