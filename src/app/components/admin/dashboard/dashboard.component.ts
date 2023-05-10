import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  items=[
    {
      id:1,
      name:'manoj',
      status:'active',
      action:'add'
    },
    {
      id:2,
      name:'dsds',
      status:'block',
      action:'remove'
    }
  ];

  constructor(){
      
  }

}
