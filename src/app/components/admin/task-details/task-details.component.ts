import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { TaskDetailsService } from 'src/app/services/project/task-details.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

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
        url: '../',
      },
      {
        name:'tasks',
        url:'tasks'
      },
  ];

  constructor(private adminService:AdminService, private route:ActivatedRoute) { }


  ngOnInit() {
    let id:any;
    if(this.route.snapshot.paramMap.has("id")){
      id=this.route.snapshot.paramMap.get("id");
      this.tasks(id);
    }else{
      this.tasks(null);
    }
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
      this.adminService.getAllTaskOfOneProject(id).subscribe((tasks:any)=>{
        for(let task of tasks){
          this.TaskKeys.push(Object.keys(task))
          this.TaskValue.push(Object.values(task));
          console.log(task);
        }
      })
    }
  }

}
