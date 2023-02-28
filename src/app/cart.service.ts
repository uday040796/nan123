import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myUrl = 'http://localhost:8080/carts';
  urlForAddingProductIntoCart = 'http://localhost:8080/carts';
  deleteFromCart = "http://localhost:8080/carts";
  constructor(private http: HttpClient) {}

  fetchCartDt() {
    return this.http.get(this.myUrl);
  }

  sumArray(array: any) {
    return array.reduceRight((acc:any, cur:any) => acc + cur, 0);
  }

  multiplyArray(array: any){
    return array.reduceRight((acc:any, cur:any) => acc * cur, 0);
  }

  postIntoCart(request:any){
    return this.http.post(this.urlForAddingProductIntoCart,request);
  }

  deleteProductFromCart(id:number){
    return this.http.delete(this.deleteFromCart+'/'+id);
  }
}
