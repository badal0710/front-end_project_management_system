import {  AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart, { ChartData } from 'chart.js/auto';
import { ContractorService } from 'src/app/services/contractor/contractor.service';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  
  constructor(private cd: ChangeDetectorRef, private router:Router, private projectService: ProjectsDetailService, private investorService: InvestorService, private contractorService: ContractorService) {
  }
  
  ngOnInit(): void {
    this.projects();
    this.loadCards();
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
  investorCard=['bi bi-currency-dollar','Investor',20,'investorDetail'];
  contractorCard=['bi bi-person','Contractor',30,'contractorDetail'];
  projectCard=['bi bi-buildings','Projects',120,'null'];


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
  ProjectAction: any=['Project',['projectStatus','projectName','projectStartingDate','projectDeadline','projectTypeName','projectLocationId']];
  Names:any=[];

  // tables
  projects(){
    this.projectService.getAllProject().subscribe((projects:any)=>{
      for(let project of projects){
        this.Names=Object.keys(project);
        this.ProjectKeys.push(Object.keys(project))
        this.ProjectValue.push(Object.values(project));
        this.projectChartLabel.push(project.projectName);
        this.projectChartValue.push(project.projectStatus);
      }

      //format objects
      [this.ProjectKeys,this.ProjectValue] = this.formatObject(this.ProjectKeys,this.ProjectValue);

    })
  }

  formatObject(key:any,value:any){

    let v:any[]=[];

    // index which we want to remove
    for(let task of value){
      for(let i=0;i<=task.length;i++){
        if(typeof task[i]==='object'){
          v.push(i);
        }
      }
    }

    // remove oparation
    for(let index of v){
      key.map((obj:any)=>{
        obj.splice(v[0],1);
      })

      value.map((obj:any)=>{
        obj.splice(v[0],1);
      })
    }
    
    return [key,value];
  }

  formatObjectForDetail(keys:any,values:any){
    for(let i=0;i<values.length;i++){
      if(typeof values[i] === 'object'){
        let tmpTitle=[];
        let tmpDesc=[];
        let tmp = Object.entries(values[i]);
        for(let v of tmp){
          tmpTitle.push(v[0]);
          tmpDesc.push(v[1]);
          break;
        }
        keys.splice(i,1,...tmpTitle);
        values.splice(i,1,...tmpDesc);
      }
    }
    return [keys,values];
  }

  loadCards(){

    this.investorService.totalInvestor().subscribe((count:any)=>{
      this.investorCard[2]=count;
    });
    this.contractorService.totalContractor().subscribe((count:any)=>{
      this.contractorCard[2]=count;
    });
    this.projectService.totalProject().subscribe((count:any)=>{
      this.projectCard[2]=count;
    });

  }

}
