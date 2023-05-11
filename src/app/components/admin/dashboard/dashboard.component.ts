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

  constructor() {
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
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
