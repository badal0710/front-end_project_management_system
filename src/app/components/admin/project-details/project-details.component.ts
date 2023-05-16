import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit,AfterViewInit {

  data: any = [];

  //project's detail
  ProjectRows:any;
  ProjectTitle:any;
  ProjectDesc:any;

  //form
  formData:any={};
  formData_original:any={};

  //task
  TaskValue: any[] = [];
  TaskKeys: any = [];
  TaskName: any = "Task List";
  TableAction: any = ['Create Task'];
  TaskRowAction: any = [['View', 'admin/tasks']];

  // breadcrumbs
  myBreadCrumbs: any = [
    {
      name: 'Home',
      url: '../../'
    },
  ];

  // chart
  taskChartName="Project's Chart";
  taskChartType="pie";
  taskChartLabel:any=[];
  taskChartValue:any=[];

  constructor(private adminService: AdminService, private route: ActivatedRoute, private cd:ChangeDetectorRef, private router: Router) { }
 
  p(a:any,b:any){
    console.log(`${a}: ${b}`);
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
    this.p("ngafterview",this.ProjectTitle);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.loadData(id);
    this.p("ngoninit",this.ProjectTitle);
  }

  tasksOfProject(id: any) {
    this.adminService.getAllTaskOfOneProject(id).subscribe((tasks: any) => {
      for (let task of tasks) {
        this.TaskKeys.push(Object.keys(task))
        this.TaskValue.push(Object.values(task));
        this.taskChartLabel.push(task.taskName);
        this.taskChartValue.push(task.taskStatus);
      }
      this.cd.detectChanges();
    })
    this.p("taskofproject",this.ProjectTitle);
  }

  detailOfProject(id:any){
    this.adminService.getOneProject(id).subscribe((project: any) => {
        let index=0;

        this.ProjectTitle=Object.keys(project);
        this.ProjectDesc=Object.values(project);

        for(let i=0;i<this.ProjectDesc.length;i++){
          if(typeof this.ProjectDesc[i] === 'object'){
            let tmpTitle=[];
            let tmpDesc=[];
            let tmp = Object.entries(this.ProjectDesc[i]);
            for(let v of tmp){
              tmpTitle.push(v[0]);
              tmpDesc.push(v[1]);
            }
            this.ProjectTitle.splice(i,1,...tmpTitle);
            this.ProjectDesc.splice(i,1,...tmpDesc);
          }
        }

        for(let key of this.ProjectTitle){
          this.formData[key]=this.ProjectDesc[index];
          index++;
        }
        this.formData_original=this.formData;
        console.log(this.formData);

        console.log(this.ProjectTitle);

    })
    this.p("detailofproject",this.ProjectTitle);
  }

  updateProject(){
    this.adminService.updateProject(this.formData,this.route.snapshot.paramMap.get("id")).subscribe((result:any) =>{
      setTimeout(function () {
        if (result === "OK") {
          alert("Updated Successfully");
        } else {
          alert("error Occur while Updating");
        } 
      }, 2000);
      
      this.loadData(this.route.snapshot.paramMap.get("id"));
    })
    this.p("updateproject",this.ProjectTitle);
  }

  deleteProject(){
    this.adminService.deleteProject(this.route.snapshot.paramMap.get("id")).subscribe();
    alert("deleted")
    this.router.navigateByUrl('/admin/dashboard');
  }

  loadData(id:any){
    this.detailOfProject(id);
    this.tasksOfProject(id);
    this.p("loadData",this.ProjectTitle);
  }

}
