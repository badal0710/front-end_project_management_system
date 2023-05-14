import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private adminService: AdminService, private route: ActivatedRoute, private cd:ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    // let id:any;
    let id = this.route.snapshot.paramMap.get("id");
    this.detailOfProject(id);
    this.tasksOfProject(id);
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
  }

  detailOfProject(id:any){
    this.adminService.getOneProject(id).subscribe((project: any) => {
        let index;
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

    })
  }

  // tasks(id: any) {
  //   if (id == null) {
  //     this.adminService.getAllTaskOfOneProject(id).subscribe((tasks: any) => {
  //       for (let task of tasks) {
  //         this.TaskKeys.push(Object.keys(task))
  //         this.TaskValue.push(Object.values(task));
  //         console.log(task);
  //       }
  //     })
  //   } else {
  //     this.adminService.getAllTasks().subscribe((tasks: any) => {
  //       for (let task of tasks) {
  //         this.TaskKeys.push(Object.keys(task))
  //         this.TaskValue.push(Object.values(task));
  //         console.log(task);
  //       }
  //     })
  //   }
  // }

}
