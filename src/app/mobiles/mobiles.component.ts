import { Component, OnInit } from '@angular/core';
import { mobile } from 'src/assets/interface';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  myMobiles: mobile[] = [];
  noOfMobiles!: number;

  constructor(private mobileService:MobilesService){}

  ngOnInit(){
    
   // this.myMobiles = this.mobileService.getData();
    this.mobileService.fetchData().subscribe((res:mobile[])=>{
      this.myMobiles = res;
      this.noOfMobiles= this.myMobiles.length;

    });
    
  }
}
