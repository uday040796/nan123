import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { statesAndDistcits } from 'src/assets/mock';
import { data } from './myInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myUrl = '../assets/mock.json';

  constructor(private http : HttpClient) { }




  add(a:number,b:number){
   return a+b;
  }

  getStatesAndDistrcits(){
    return statesAndDistcits;
  }


  fetchDataFromDb(){
   return this.http.get<data>(this.myUrl);
  }

}
