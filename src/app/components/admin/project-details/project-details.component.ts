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
  TableAction: any = ['Task',['taskName','taskStatus','taskStartingDate','taskDeadLine','allocatedBudget','jobRole','email','contractorId','projectId']];
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
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.loadData(id);
  }

  tasksOfProject(id: any) {
    this.adminService.getAllTaskOfOneProject(id).subscribe((tasks: any) => {
      for (let task of tasks) {
        
        const reversedData:any = {};
        Object.keys(task).reverse().forEach(key => {
          reversedData[key] = task[key];
        });
        
        this.TaskKeys.push(Object.keys(reversedData))
        this.TaskValue.push(Object.values(reversedData));
        this.taskChartLabel.push(task.taskName);
        this.taskChartValue.push(task.taskStatus);
      }

      [this.TaskKeys,this.TaskValue] =this.formatObject(this.TaskKeys,this.TaskValue);

      this.cd.detectChanges();

    })

  }

  detailOfProject(id:any){
    this.adminService.getOneProject(id).subscribe((project: any) => {
        let index=0;

        this.ProjectTitle=Object.keys(project);
        this.ProjectDesc=Object.values(project);

        //format object for display
        [this.ProjectTitle,this.ProjectDesc] = this.formatObjectForDetail(this.ProjectTitle,this.ProjectDesc);

        for(let key of this.ProjectTitle){
          this.formData[key]=this.ProjectDesc[index];
          index++;
        }
        this.formData_original=this.formData;
    })
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
  }

  deleteProject(){
    this.adminService.deleteProject(this.route.snapshot.paramMap.get("id")).subscribe();
    alert("deleted")
    this.router.navigateByUrl('/admin/dashboard');
  }

  loadData(id:any){
    this.detailOfProject(id);
    this.tasksOfProject(id);
  }

  formatObject(key:any,value:any){

    let v:any[]=[];

    // index which we want to remove
    for(let task of value){
      for(let i=0;i<=task.length;i++){
        if(typeof task[i]==='object'){
          v.push(i);
        }
      }
    }

    // remove oparation
    for(let index of v){
      key.map((obj:any)=>{
        obj.splice(v[0],1);
      })

      value.map((obj:any)=>{
        obj.splice(v[0],1);
      })
    }

    return [key,value];
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
