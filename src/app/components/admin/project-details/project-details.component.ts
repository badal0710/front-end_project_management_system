import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  data: any = [];

    //task
    TaskValue: any[]=[];
    TaskKeys: any=[];
    TaskName: any="Task List";
    TableAction: any=['Create Task'];
    TaskRowAction: any=[['Update','admin/tasks/update'],['Delete','admin/tasks/delete']];

        // breadcrumbs
  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'dashboard'
    },
    {
      name:'Projects',
      url:'Projects'
    },
];

constructor(private adminService:AdminService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // let id:any;
    let id=this.route.snapshot.paramMap.get("id");
    this.projects(id);
  }

  projects(id: any){
    this.adminService.getAllTasks().subscribe((tasks:any)=>{
      for(let task of tasks){
        this.TaskKeys.push(Object.keys(task))
        this.TaskValue.push(Object.values(task));
        console.log(task);
      }
    })
  }

  tasks(id: any){
    if(id==null){
      this.adminService.getAllTasks().subscribe((tasks:any)=>{
        for(let task of tasks){
          this.TaskKeys.push(Object.keys(task))
          this.TaskValue.push(Object.values(task));
          console.log(task);
        }
      })
    }else{
      this.adminService.getAllTask(id).subscribe((tasks:any)=>{
        for(let task of tasks){
          this.TaskKeys.push(Object.keys(task))
          this.TaskValue.push(Object.values(task));
          console.log(task);
        }
      })
    }
  }

}
