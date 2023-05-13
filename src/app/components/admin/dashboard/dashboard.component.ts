import {  AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  
  constructor(private adminService: AdminService, private cd: ChangeDetectorRef) {
  }
  
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
  
  ngOnInit(): void {
    this.projects();
    this.tasks();
  }

  // chart
  @Input() values!: any[];
  @Input() labels!: any[];

  // chart
  chartName1="chartName1";
  chartType1="pie";
  chartLabel1=['1','2','3','4','5'];
  chartValue1=[20,40,60,80,100];

  chartName2="chartName1";
  chartType2="doughnut";
  chartLabel2=['1','2','3','4','5'];
  chartValue2=[20,40,60,80,100];

  //project
  ProjectValue: any[]=[];
  ProjectKeys: any=[];
  ProjectName: any="Project List";

  //task
  TaskValue: any[]=[];
  TaskKeys: any=[];
  TaskName: any="Task List";

  // breadcrumbs
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

  // tables
  projects(){
    this.adminService.getAllProject().subscribe((projects:any)=>{
      for(let project of projects){
        this.ProjectKeys.push(Object.keys(project))
        this.ProjectValue.push(Object.values(project));
      }
    })
  }

  tasks(){
    this.adminService.getAllTask().subscribe((tasks:any)=>{
      for(let task of tasks){
        this.TaskKeys.push(Object.keys(task))
        this.TaskValue.push(Object.values(task));
      }
    })
    console.log(this.TaskKeys);
    console.log(this.TaskValue);
  }


}
