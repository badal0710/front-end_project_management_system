import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  chartDataarr: ChartData[] = [
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#FF8F80', '#A9A9FF'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#FF8F80', '#A9A9FF'],
          borderWidth: 1
        }
      ]
    },
    {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF8F80'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF8F80'],
          borderWidth: 1
        }
      ]
    }
  ];
  


  chartData = {
    labels: ['Red', 'Pink', 'Green', 'Yellow', 'Orange', 'Blue',],
    datasets: [{
      label: 'My First Dataset',
      data: [150, 150, 150, 150, 150, 150],
      backgroundColor: [
        'red',
        'pink',
        'green',
        'yellow',
        'orange',
        'blue'
      ],
      hoverOffset: 4
    }],
  }

}
