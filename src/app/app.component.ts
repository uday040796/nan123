import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fng';
  finalValue!: number; 

  constructor(private myService : HomeServiceService){}
  ngOnInit() {
    this.finalValue=this.myService.add(5,8);
  }

  
  
}
