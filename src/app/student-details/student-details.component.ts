import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  @Input() recievedSttementFromStudents = '';
  empName : string = 'Meenakshi';
  @Output() valueToBeSendToParent = new EventEmitter();

  ngOnInit(){
    console.log('the value gettting from parent is : ',this.recievedSttementFromStudents);
    this.valueToBeSendToParent.emit(this.empName);
  }

}
