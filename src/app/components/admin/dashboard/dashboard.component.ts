import {  AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import Chart, { ChartData } from 'chart.js/auto';
import { ContractorService } from 'src/app/services/contractor/contractor.service';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import Swal from 'sweetalert2';
import { typeOfProject } from '../../shared/helper/list';
import { ProjectLocationService } from 'src/app/services/projectLocation/project-location.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private cd: ChangeDetectorRef, private router:Router, private projectService: ProjectsDetailService, private investorService: InvestorService, private contractorService: ContractorService, private projectLocationService:ProjectLocationService) {
  }
  
  ngOnInit(): void {
    this.projects();
    this.loadCards();
    this.Alllocations();
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

  filterProjects:any='all';
  allProjects:any[]=[];
  notStartedProjects:any[]=[];
  onGoingProjects:any[]=[];
  doneProjects:any[]=[];

  listOfProjectType:string[]=typeOfProject;  
  locations:any[]=[];

  projects(){
    this.projectService.getAllProject().subscribe((projects:any)=>{
      for(let project of projects){
        this.allProjects.push(project);
        if(project.projectStatus===0){
          this.notStartedProjects.push(project);
        }else if(project.projectStatus===100){
          this.doneProjects.push(project);
        }else{
          this.onGoingProjects.push(project);
        }
      }
    })
  }

  async view(projectId:number){
    await this.router.navigate(['admin/projects',projectId]);
  }

  createProject(data:NgForm){
    const body = {
      "projectStatus":parseInt("10"),
      "projectName":data.value.name,
      "projectStartingDate":data.value.start,
      "projectDeadline":data.value.end,
      "projectTypeName":data.value.typeOfProject,
      "projectLocationId":parseInt(data.value.location)
    };
    this.projectService.createProject(body).subscribe((result:any)=>{
      try {
        Swal.fire("Created","Project Successfully Created");
      } catch (error) {
        Swal.fire("Error","Error while creating New Project");
      }
    });
  }

  Alllocations(){
    this.projectLocationService.getAllLocation().subscribe((locations:any)=>{
      for(let location of locations){
        this.locations.push(location);
      }
    });
    console.log(this.locations);
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
