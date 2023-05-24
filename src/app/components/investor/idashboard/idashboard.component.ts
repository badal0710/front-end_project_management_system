import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.css']
})
export class IdashboardComponent implements OnInit {

  inProgress: number[] = [];
  notStart: number[] = [];
  done: number[] = [];

 constructor(private taskdetail:TaskdetailService, private projectDetail: ProjectsDetailService , private route:ActivatedRoute, private router:Router) { }

 ngOnInit() {
   this.loadData();
 }

 loadData(){
  let email = sessionStorage.getItem("UPN");
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
 }

}
