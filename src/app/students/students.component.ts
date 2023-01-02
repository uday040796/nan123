import { Component } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent {

  isSelected : boolean[] = [];

  selectedStudent : any ;
  students: any[] = [
    {
      id: 120,
      name: "uday",
      age: 25,
    },
    {
      id: 121,
      name: "nandhini",
      age: 22,
    },
    {
      id: 122,
      name: "manisha",
      age: 26,
    },
    {
      id: 123,
      name: "ravi",
      age: 25,
    },
  ];

  ngOnInit(){
    this.isSelected = [];
    for(let i=0;i<this.students.length; i++){
      this.isSelected.push(false);
    }
    console.log(this.isSelected);
    this.onClick(this.students[0],0);
    console.log(this.isSelected);
  }

  onClick(student:any,index : number){
    this.isSelected = [];
    for(let i=0;i<this.students.length; i++){
      this.isSelected.push(false);
    }
   this.isSelected[index]=true;
   console.log(student);
   this.selectedStudent = student;
  }
}
