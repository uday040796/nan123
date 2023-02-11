import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { mobile } from 'src/assets/interface';
import { myMobiles } from 'src/mock';

@Injectable({
  providedIn: 'root'
})
export class MobilesService implements OnInit{
  myUrl= "../assets/mock.json";

  stuName = "uday";

  constructor(private http : HttpClient) { }

  ngOnInit(){
    
  }

  // getData(){
  //   return myMobiles;
  // }

  fetchData(){
     return this.http.get<mobile[]>(this.myUrl);
  }
}
