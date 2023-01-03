import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ditrsicts',
  templateUrl: './ditrsicts.component.html',
  styleUrls: ['./ditrsicts.component.css']
})
export class DitrsictsComponent implements OnChanges{

  @Input() recievedDistricts: any;

  ngOnChanges(){
    console.log('child',this.recievedDistricts);
  }

}
