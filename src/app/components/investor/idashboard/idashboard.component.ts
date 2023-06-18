import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestorProjectServiceService } from 'src/app/services/investorProject/investor-project-service.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.css']
})
export class IdashboardComponent implements OnInit {

  requestToInvest: number[] = [];
  inProgress: number[] = [];
  notStart: number[] = [];
  done: number[] = [];

  notInvestedProject:any[]=[];

  formData:any;

 constructor(private taskdetail:TaskdetailService,private investorProjectServiceService: InvestorProjectServiceService , private projectDetail: ProjectsDetailService , private route:ActivatedRoute, private router:Router) { }

 ngOnInit() {
   this.loadData();
 }

 loadData(){
  let email = localStorage.getItem("UPN");
   this.projectDetail.getAllProjectOfOneInvestor(email).subscribe((investorProjects:any)=>{
     for (let investorProject of investorProjects){
      let project = investorProject.project;
      
      if(investorProject.status==='pending'){
        this.requestToInvest.push(project.projectId);
      }else{
        if(project.projectStatus===0){
          this.notStart.push(project.projectId);
        }else if(project.projectStatus===100){
          this.done.push(project.projectId);
        }else{
          this.inProgress.push(project.projectId);
        }
      }
     }
   });

   this.investorProjectServiceService.getNotInvestedProjects(email).subscribe((projects:any)=>{
      for(let project of projects){
        if(project.projectStatus!==0 && project.projectStatus!==100)
        
        this.notInvestedProject.push(project);
      }
   });
 }

 resetData(){
  this.requestToInvest = [];
  this.inProgress = [];
  this.notStart = [];
  this.done = [];
  this.notInvestedProject = [];
 }

 invest(data:NgForm){
  if(this.isValid(data)){
    this.investorProjectServiceService.createProjectInvestor(data.value,localStorage.getItem("UPN")).subscribe((result:any)=>{
      if (result === 200) {
        Swal.fire('Investment request send','Investment Request Send to Admin, wait Untill Admin Approve It','success')
      } else {
        Swal.fire('fail','Error while Sending investment Request to admin','error')
      } 
    })
    setTimeout(() => {
      this.reloadParent();
    }, 3000);
  }
 }

 isValid(formValues:NgForm){
  let msg = '<ui style="text-align:left">';
    let error = 0;
    if (!formValues.value.projectid || formValues.value.projectid.trim() === '') {
      msg += '<li>Please Choose One Project</li>';
      error++; 
    }
    if (!formValues.value.amount || formValues.value.amount) {
      msg += '<li>Please give us total amount how much you want to invest</li>';
      error++; 
    }
    if(error==0){
      return true;
    }else{
      msg += '</ui></div>';
      Swal.fire('Error',msg,'error');
      return false;
    }
 }

 reloadParent(){
  this.resetData();
  this.loadData();
}

}
