import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private adminService: AdminService) {
    //comment
  }
  
  ngOnInit(): void {
    this.createChart(this.colors,this.values);
  }

  @Input() colors!: any[];
  @Input() values!: any[];

  chart: any;

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

  createChart(colors: any[], values:any[]) {

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        labels: colors, //color
        datasets: [{
          label: 'My First Dataset',
          data: values, //value
          backgroundColor: colors, //color
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }


}
