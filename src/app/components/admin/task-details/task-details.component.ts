import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

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

  TaskTitle:any;
  TaskDesc:any;

  //form
  formData:any={};
  formData_original:any={};

    // breadcrumbs
  myBreadCrumbs:any = [
      {
        name:'Home',
        url: '../../',
      },
  ];

  constructor(private adminService:AdminService, private route:ActivatedRoute) { }

  deleteTask(){

  }

  updateTask(){

  }

  ngOnInit() {
    let id:any;
    id=this.route.snapshot.paramMap.get("id");
    this.getOneTask(id);
  }

  getOneTask(id:any){
    this.adminService.getOneTask(id).subscribe((data:any)=>{

      let index=0;
      this.TaskTitle=Object.keys(data);
      this.TaskDesc=Object.values(data);

      //format object for display
      [this.TaskTitle,this.TaskDesc] = this.formatObjectForDetail(this.TaskTitle,this.TaskDesc);

      for(let key of this.TaskTitle){
        this.formData[key]=this.TaskDesc[index];
        index++;
      }
      this.formData_original=this.formData;
    })
  }

  tasks(id: any){
    if(id==null){
      this.adminService.getAllTasks().subscribe((tasks:any)=>{
        for(let task of tasks){
          this.TaskKeys.push(Object.keys(task))
          this.TaskValue.push(Object.values(task));
        }
      })
    }else{
      this.adminService.getAllTaskOfOneProject(id).subscribe((tasks:any)=>{
        for(let task of tasks){
          this.TaskKeys.push(Object.keys(task))
          this.TaskValue.push(Object.values(task));
        }
      })
    }
  }

  formatObjectForDetail(keys:any,values:any){
    for(let i=0;i<values.length;i++){
      if(typeof values[i] === 'object'){
        let tmpTitle=[];
        let tmpDesc=[];
        let tmp = Object.entries(values[i]);
        for(let v of tmp){
          tmpTitle.push(v[0]);
          tmpDesc.push(v[1]);
          break;
        }
        keys.splice(i,1,...tmpTitle);
        values.splice(i,1,...tmpDesc);
      }
    }
    return [keys,values];
  }

}
