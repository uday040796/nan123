import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { mobile } from 'src/assets/interface';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  myMobiles: mobile[] = [];
  brands = new FormControl('');
  rams = new FormControl('');
  roms = new FormControl('');
  ratings = new FormControl('');
  ramList: string[] = [];
  brandList: string[] = [];
  romList: string[] =[];
  ratingList: string[] = [];

  constructor(private mobileService: MobilesService) { }

  

  ngOnInit() {
    this.mobileService.fetchData().subscribe((res: mobile[]) => {
      this.myMobiles = res;
      this.myMobiles.forEach((ele) => {
        this.brandList.push(ele.brand);
        this.ramList.push(ele.ram.toString());        
        this.romList.push(ele.rom.toString());
        this.ratingList.push(ele.totalRating.toString());
      });
      this.brandList=this.mobileService.removeDuplicates(this.brandList);
      this.ramList=(this.mobileService.removeDuplicates(this.ramList)).sort(function(a:number, b:number){return a - b});
      this.romList=(this.mobileService.removeDuplicates(this.romList)).sort(function(a:number, b:number){return a - b});
      this.ratingList=this.mobileService.removeDuplicates(this.ratingList);
    });

  }
}
