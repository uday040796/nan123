import { Injectable, OnInit } from '@angular/core';
import { myMobiles } from 'src/mock';

@Injectable({
  providedIn: 'root'
})
export class MobilesService implements OnInit{


  stuName = "uday";

  constructor() { }

  ngOnInit(){
    
  }

  getData(){
    return myMobiles;
  }
}
