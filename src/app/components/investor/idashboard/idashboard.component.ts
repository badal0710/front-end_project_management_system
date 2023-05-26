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
      
      if(project.projectStatus===0){
        this.notStart.push(project.projectId);
      }else if(project.projectStatus===100){
        this.done.push(project.projectId);
      }else{
        this.inProgress.push(project.projectId);
      }
     }
   });

   this.investorProjectServiceService.getNotInvestedProjects(email).subscribe((projects:any)=>{
      for(let project of projects){
        if(project.projectStatus!==0 && project.projectStatus!==100)
        console.log(project);
        this.notInvestedProject.push(project);
      }
   });
 }

 invest(data:NgForm){
  console.log(data.value)
  this.investorProjectServiceService.createProjectInvestor(data.value,localStorage.getItem("UPN")).subscribe((result:any)=>{
    if (result === 200) {
      Swal.fire('Investment request send','Investment Request Send to Admin, wait Untill Admin Approve It')
    } else {
      Swal.fire('fail','Error while Sending investment Request to admin')
    } 
  })
 }

}
