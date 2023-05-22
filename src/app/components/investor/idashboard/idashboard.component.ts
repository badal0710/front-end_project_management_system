import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { InvestorService } from 'src/app/services/investor/investor.service';

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.css']
})
export class IdashboardComponent implements OnInit,AfterViewInit {

  constructor(private investorService: InvestorService, private cd: ChangeDetectorRef, private router:Router) {
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.projects(sessionStorage.getItem('UPN'));
  }

  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'investor'
    }
  ];

    //card
    investorCard=['bi bi-currency-dollar','Investor',20,'investorDetail'];
    contractorCard=['bi bi-person','Contractor',30,'contractorDetail'];
    projectCard=['bi bi-buildings','Projects',120,'null'];
    fundCard=['bi bi-currency-dollar','Funding',220];
  
  
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

    projects(email:any){
      this.investorService.getAllProjectOfOneInvestor(email).subscribe((projects:any)=>{
        for(let project of projects){

          let keys = Object.keys(project);
          let firstElement = keys[0];
          let lastElement = keys[keys.length - 1];
          let mykeys = [firstElement,lastElement];

          let values = Object.values(project);
          let firstvElement = values[0];
          let lastvElement = values[values.length - 1];
          let myvalues = [firstvElement,lastvElement];

          this.Names=Object.keys(project);
          this.ProjectKeys.push(mykeys)
          this.ProjectValue.push(myvalues);

          this.projectChartLabel.push(Object.keys(project)[0]);
          this.projectChartValue.push(Object.values(project)[3]);
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
  
    // loadCards(){
  
    //   this.adminService.totalInvestor().subscribe((count:any)=>{
    //     this.investorCard[2]=count;
    //   });
    //   this.adminService.totalContractor().subscribe((count:any)=>{
    //     this.contractorCard[2]=count;
    //   });
    //   this.adminService.totalProject().subscribe((count:any)=>{
    //     this.projectCard[2]=count;
    //   });
  
    // }

}
