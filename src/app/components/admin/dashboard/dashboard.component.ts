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
  
  ngOnInit(): void {
    this.projects();
  }
  
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  // breadcrumbs
  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'admin'
    }
  ];

  // card
  cardData1=['bi bi-person','Investor','20'];
  cardData2=['bi bi-person','Contractor','30'];
  cardData3=['bi bi-buildings','Projects','120'];
  cardData4=['bi bi-currency-dollar','Funding','220'];


  // chart
  projectChartName="Project's Chart";
  projectChartType="pie";
  projectChartLabel:any=[];
  projectChartValue:any=[];

  //project
  ProjectValue: any[]=[];
  ProjectKeys: any[]=[];
  ProjectName: any="Project List";
  ProjectRowAction: any=[['View','admin/projects']];
  ProjectAction: any=['Create Project'];
  Names:any=[];

  // tables
  projects(){
    this.adminService.getAllProject().subscribe((projects:any)=>{
      for(let project of projects){
        this.Names=Object.keys(project);
        this.ProjectKeys.push(Object.keys(project))
        this.ProjectValue.push(Object.values(project));
        this.projectChartLabel.push(project.projectName);
        this.projectChartValue.push(project.projectStatus);
      }
      console.log(this.Names);
      this.ProjectValue.map( (obj) => {
        let v:any = null;
        for(let i=0;i<=obj.length;i++){
            if(typeof obj[i]==="object"){
              // obj.splice(i,1);
              // this.ProjectKeys.splice(i,1);
              v=i;
            }
        }
        obj.splice(v,1);
        this.ProjectKeys.map((obj2)=>{
          obj2.splice(v,1);
        });
      })

    })
  }


}
