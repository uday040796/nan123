import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  myMobiles: any[] = [];
  noOfMobiles!: number;

  constructor(private mobileService:MobilesService){}

  ngOnInit(){
    
    this.myMobiles = this.mobileService.getData();
    this.noOfMobiles= this.myMobiles.length;
  }
}
