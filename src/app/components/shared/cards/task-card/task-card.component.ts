import { Component, Input, OnInit } from '@angular/core';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  constructor(private taskDetail: TaskdetailService){}

  @Input() public id!:number;
  @Input() public user!:string;

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

  updateTaskStatus(progressValue:number) {
    this.taskDetail.updateTask(progressValue,this.id).subscribe((result:any)=>{
      if (result === "OK") {
        Swal.fire('update','Task Updated')
      } else {
        Swal.fire('Error','Error while updating Task')
      } 
    });
  }

  deleteTask(){
    this.taskDetail.deleteTask(this.id).subscribe((result:any)=>{
      if (result === "OK") {
        Swal.fire('update','Task Updated')
      } else {
        Swal.fire('Error','Error while updating Task')
      } 
    });
  }

  ngOnInit(): void {
    this.loadData(this.id);
  }

  open(){
    this.loadData(this.id);
  }

  loadData(id:Number){
    this.taskDetail.getOneTask(id).subscribe( (result:any) => {
      this.taskName = result.taskName;
      this.projectName = result.project.projectName;
      this.startDate = result.taskStartingDate;
      this.endDate = result.taskDeadLine;
      this.budget = result.allocatedBudget;
      this.progressValue = result.taskStatus;
    });
  }

}
