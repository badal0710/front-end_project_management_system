import { Component, Input } from '@angular/core';
import { InvestorProjectServiceService } from 'src/app/services/investorProject/investor-project-service.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  constructor(private projectDetail: ProjectsDetailService, private investorProjectServiceService:InvestorProjectServiceService, private taskdetailService:TaskdetailService){}

  @Input() public id!:number;

  projectName!: string;
  investedAmount!: number;
  progressValue!: number;
  startDate!: string;
  endDate!: string;
  projectType!: string;
  location!: string;
  taskIds:number[]=[];

  ngOnInit(): void {
    this.loadData(this.id);
  }

  loadData(id:number){
    this.projectDetail.getOneProject(id).subscribe((project:any)=>{
  
      let email = localStorage.getItem("UPN");
      this.projectName=project.projectName;
      this.progressValue=project.projectStatus;
      this.startDate=project.projectStartingDate;
      this.endDate=project.projectDeadline;
      this.projectType=project.projectTypeName;
      this.location=`${project.projectLocation.area},${project.projectLocation.city},${project.projectLocation.state}`;
      this.investorProjectServiceService.getInvestedAmount(email,project.projectId).subscribe((result:any)=>{
        this.investedAmount=result;
      });
      this.taskdetailService.getAllTaskOfOneProject(project.projectId).subscribe((tasks:any)=>{
        for(let task of tasks){
          this.taskIds.push(task.taskId);
        }
      });
    });

  }

}
