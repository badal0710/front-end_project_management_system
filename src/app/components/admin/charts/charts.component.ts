import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements AfterViewInit, OnInit {
  
  @Input() chartValue:any;
  @Input() chartName:any;
  @Input() chartLabel:any;
  @Input() chartType:any;
  
  chart: any;
  chartId:any

  public static count = 0;
  constructor(){
    ChartsComponent.count += 1;
    this.chartId=ChartsComponent.count.toString();
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.createChart(this.chartId, this.chartType, this.chartValue, this.chartLabel);
  }

  createChart(chartId: any, chartType:any, chartValue:any, chartLabel:any) {

    let colors = this.getColors(chartValue);
    this.chart = new Chart(chartId, {
      type: chartType, //this denotes tha type of chart

      data: {
        labels: chartLabel, //color
        datasets: [{
          data: chartValue, //value
          backgroundColor: colors, //color
          hoverOffset: 5
        }],
      },
      options: {
        aspectRatio: 4
      }

    });
    
  }

  getColors(values:any){
    let tmp=['red','green','yellow','pink','blue','orange','black'];
    return tmp;
  }



}
