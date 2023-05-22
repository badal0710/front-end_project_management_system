import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  constructor(private adminService: AdminService){}

  @Input() public id!:number;

  taskName:string='';
  projectName:string='';
  startDate:string='';
  endDate:string='';
  budget:string='';
  progressValue: number = 50;

  increaseProgress() {
    if (this.progressValue < 100) {
      this.progressValue += 10;
    }
  }

  decreaseProgress() {
    if (this.progressValue > 0) {
      this.progressValue -= 10;
    }
  }

  updateTaskStatus(id:number,progressValue:number) {
    alert(id+"=>"+progressValue);
  }

  ngOnInit(): void {
    console.log("ngoninit");
    this.loadData(this.id);
  }

  open(){
    this.loadData(this.id);
  }

  loadData(id:Number){
    this.adminService.getOneTask(id).subscribe( (result:any) => {
      console.log(result);
      this.taskName = result.taskName;
      this.projectName = result.project.projectName;
      this.startDate = result.taskStartingDate;
      this.endDate = result.taskDeadLine;
      this.budget = result.allocatedBudget;
      this.progressValue = result.taskStatus;
    });
  }

}
