import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { statesAndDistcits } from 'src/assets/mock';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  completeData : any;
  myStates : any[] = [];
  districtsForSelectedState : any;
  sum : any;

  constructor(private route : Router,private userService : UserService){}

  onClick(){
    this.route.navigate(['/header/career']);
  }

  ngOnInit() {
    this.sum=this.userService.add(5,2);
    this.myStates = [];
    this.completeData = this.userService.getStatesAndDistrcits();
    this.completeData.states.forEach((e:any)=>{
       this.myStates.push(e.state);
    });
    console.log(this.myStates);
  }

  onChange(event:any){
    console.log(event.target.value);
    this.districtsForSelectedState=this.completeData.states.filter((ele:any)=> ele.state === event.target.value)[0].districts;
  }


}
