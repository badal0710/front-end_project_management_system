import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'manoj',
      status: 'active',
      action: 'add'
    },
    {
      id: 2,
      name: 'dsds',
      status: 'block',
      action: 'remove'
    }
  ];

  @Input() data!: ChartData;
  @Input() type!: string;

  chart: any;

  myBreadCrumbs:any = [
    {
      name:'item1',
      url:'url1'
    },
    {
      name:'item2',
      url:'url2'
    },
    {
      name:'item3',
      url:'https://www.google.com'
    },
    {
      name:'item4',
      url:'url2'
    },
  ];

  constructor() {
    //comment
  }

  ngOnInit(): void {
    this.createChart(this.data,this.type);
  }

  createChart(data: ChartData, type:String) {

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: this.data,
      options: {
        aspectRatio: 2.5
      }

    });
  }

}
