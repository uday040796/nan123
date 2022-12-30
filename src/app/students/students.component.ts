import { Component } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent {

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
    this.onClick(this.students[0]);
  }

  onClick(student:any){
   console.log(student);
   this.selectedStudent = student;
  }
}
