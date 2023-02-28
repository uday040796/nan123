import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/assets/interface';

@Injectable({
  providedIn: 'root'
})
export class MobilesService implements OnInit{
  urlForAllproducts = "http://localhost:8080/products";

  stuName = "uday";

  constructor(private http : HttpClient) { }

  ngOnInit(){
    
  }

  removeDuplicates(arr: any) {
    return arr.filter((item: any,
      index: any) => arr.indexOf(item) === index);
  }

  // getData(){
  //   return myMobiles;
  // }

  fetchData(){
     return this.http.get<Product[]>(this.urlForAllproducts);
  }
}
