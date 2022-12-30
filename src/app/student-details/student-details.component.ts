import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit,OnChanges{

  @Input() recievedStudent: any;

  ngOnInit() {
      
  }

  ngOnChanges(){
    console.log('recieved Dta From Student: ',this.recievedStudent);
  }

}
