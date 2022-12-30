import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
   statement : string = 'India is my country';
   sendNow(event:any){
    console.log('the value getting from child :  ',event);
   }
}
