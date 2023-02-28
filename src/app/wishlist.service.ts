import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  myUrl = 'http://localhost:8080/wishlists';
  urlForAddingProductIntoWishlist = "http://localhost:8080/wishlists";
  deleteFromWishlist = "http://localhost:8080/wishlists";
  constructor(private http: HttpClient) {}

  fetchWishlistDt() {
    return this.http.get(this.myUrl);
  }

  postIntoWishlist(req:any){
    return this.http.post(this.urlForAddingProductIntoWishlist,req);
  }

  deleteProductFromWishlist(id:number){
    return this.http.delete(this.deleteFromWishlist+'/'+id);
  }
}
