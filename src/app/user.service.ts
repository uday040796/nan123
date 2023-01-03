import { Injectable } from '@angular/core';
import { statesAndDistcits } from 'src/assets/mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  add(a:number,b:number){
   return a+b;
  }

  getStatesAndDistrcits(){
    return statesAndDistcits;
  }
}
