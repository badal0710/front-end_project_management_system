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
    this.loadData();
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
    if(this.isValidForEdit(data)){

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
          Swal.fire('update','Project Updated','success')
          this.reloadPage();
        } else {
          Swal.fire('Error','Error while updating Project','error')
        } 
        this.loadData();
      })
    }
  }

  createTask(data:NgForm){
    if(this.isValidForCreate(data)){
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
              Swal.fire('Created','New Task Created','success')
            } else {
              Swal.fire('Error','Error while Creating Task','error')
            }
          } catch (error) {
            Swal.fire('Error','Error while Creating Task','error')
          }
          this.reloadPage();
          this.loadData();
        });
      } catch (error) {
        Swal.fire('Error','Error while Creating Task','error');
      }
    }   
  }
    
  isValidForCreate(formValues: NgForm): boolean {
    let msg = '<ui style="text-align:left">';
    let error = 0;
    if (!formValues.value.name || formValues.value.name.trim() === '') {
      msg += '<li>Name is require</li>';
      error++; 
    }
  
    if (!formValues.value.contractorId) {
      msg += '<li>Please choose Contractor </li>';
      error++;
    }
  
    if (!formValues.value.start) {
      msg += '<li>StartDate is require</li>';
      error++;
    }
  
    if (!formValues.value.end) {
      msg += '<li>Enddate is require</li>';
      error++;
    }
  
    if (!formValues.value.budget) {
      msg += '<li>Please choose Task Budget </li>';
      error++;
    }

    if(new Date(formValues.value.start).getTime() > new Date(formValues.value.end).getTime()){
      msg += '<li>EndDate is always Greater than StartDate</li>';
      error++;
    }

    if(new Date(this.projectDetail.projectStartingDate).getTime() > new Date(formValues.value.start).getTime()){
      msg += '<li>Task Start Date is always Greater than Project Start Date</li>';
      error++;
    }

    if(new Date(this.projectDetail.projectDeadline).getTime() < new Date(formValues.value.end).getTime()){
      msg += '<li>Task End Date is always Less than Project End Date</li>';
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

  isValidForEdit(formValues: NgForm): boolean {
    let msg = '<ui style="text-align:left">';
    let error = 0;
    if (!formValues.value.name || formValues.value.name.trim() === '') {
      msg += '<li>Name is require</li>';
      error++; 
    }
  
    if (!formValues.value.start) {
      msg += '<li>StartDate is require</li>';
      error++;
    }
  
    if (!formValues.value.end) {
      msg += '<li>Enddate is require</li>';
      error++;
    }
  
    if (!formValues.value.typeOfProject) {
      msg += '<li>Please choose Type Of Project </li>';
      error++;
    }

    if (!formValues.value.location) {
      msg += `<li>Please choose Location </li>`;
      error++;
    }

    if(new Date(formValues.value.start).getTime() > new Date(formValues.value.end).getTime()){
      msg += '<li>EndDate is always Greater than StartDate</li>';
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

  deleteProject(){
    this.projectsDetailService.deleteProject(this.route.snapshot.paramMap.get("id")).subscribe();
    Swal.fire('Delete','this project was Deleted','success')
    setTimeout(() => {
      this.router.navigateByUrl('/admin/dashboard');
    }, 3000);
  }

  loadData(){
    let id = this.route.snapshot.paramMap.get("id");
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
      this.reloadData();
    }, 3000);
  }

  resetData(){
    this.projectId= null;
    this.allTasks=[];
    this.projectDetail=null;
    this.locations=[];
    this.contractors=[];
  }

  reloadData(){
    this.resetData();
    this.loadData();
  }


}
