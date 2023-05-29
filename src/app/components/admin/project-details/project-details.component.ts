import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractorService } from 'src/app/services/contractor/contractor.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import { ProjectLocationService } from 'src/app/services/projectLocation/project-location.service';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';
import { typeOfTask,typeOfProject } from 'src/app/components/shared/helper/list';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit,AfterViewInit {

  formData!:any;
  locations:any[]=[];
  contractors:any[]=[];

  listOfTaskType:string[]=typeOfTask;
  listOfProjectType:string[]=typeOfProject;

  // breadcrumbs
  myBreadCrumbs: any = [
    {
      name: 'Home',
      url: '../../'
    },
  ];

  projectId!:string | null;
  allTasks:number[]=[];

  projectDetail!:any;

  constructor(private projectLocationService:ProjectLocationService, private contractorService:ContractorService ,private projectsDetailService: ProjectsDetailService, private taskdetailService:TaskdetailService ,private route: ActivatedRoute, private cd:ChangeDetectorRef, private router: Router) { }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get("id");
    this.loadData(this.projectId);
  }

  tasksOfProject(id: any) {
    this.taskdetailService.getAllTaskOfOneProject(id).subscribe((tasks: any) => {
      for (let task of tasks) {
        this.allTasks.push(task.taskId);
      }
    })

  }

  detailOfProject(id:any){
    this.projectsDetailService.getOneProject(id).subscribe((project: any) => {
      this.projectDetail=project;
    })
  }

  updateProject(data:NgForm){
    console.log(data.value);
    
    const body = {
      "projectStatus":parseInt(data.value.status),
      "projectName":data.value.name,
      "projectStartingDate":data.value.start,
      "projectDeadline":data.value.end,
      "projectTypeName":data.value.typeOfProject,
      "projectLocationId":parseInt(data.value.location)
    };
    

    this.projectsDetailService.updateProject(body,this.route.snapshot.paramMap.get("id")).subscribe((result:any) =>{
      if (result === "OK") {
        Swal.fire('update','Project Updated')
        this.reloadPage();
      } else {
        Swal.fire('Error','Error while updating Project')
      } 
      this.loadData(this.route.snapshot.paramMap.get("id"));
    })
  }

  createTask(data:NgForm){
    console.log(data.value);
    const body = {
      taskName:data.value.name,
      projectId:this.route.snapshot.paramMap.get("id"),
      contractorId:data.value.contractorId,
      taskStartingDate:data.value.start,
      taskDeadLine:data.value.end,
      allocatedBudget:data.value.budget
    };

    try {
      this.taskdetailService.createTask(body).subscribe((result:any)=>{
        try {
          if (result === 200) {
            Swal.fire('Created','New Task Created')
          } else {
            Swal.fire('Error','Error while Creating Task')
          }
        } catch (error) {
          Swal.fire('Error','Error while Creating Task')
        }
        this.reloadPage();
        this.loadData(this.route.snapshot.paramMap.get("id"));
      });
    } catch (error) {
      Swal.fire('Error','Error while Creating Task');
    }

  }

  deleteProject(){
    this.projectsDetailService.deleteProject(this.route.snapshot.paramMap.get("id")).subscribe();
    Swal.fire('Delete','this project was Deleted')
    this.router.navigateByUrl('/admin/dashboard');
  }

  loadData(id:any){
    this.detailOfProject(id);
    this.tasksOfProject(id);
    this.Alllocations();
    this.allContractors();
  }

  allContractors(){
    this.contractorService.getAllContractor().subscribe((contractors:any)=>{
      for(let contractor of contractors){
        this.contractors.push(contractor);
      }
    });
  }

  Alllocations(){
    this.projectLocationService.getAllLocation().subscribe((locations:any)=>{
      for(let location of locations){
        this.locations.push(location);
      }
    });
  }

  reloadPage(){
    setTimeout(() => {
      location.reload();
    }, 3000);
  }


}
