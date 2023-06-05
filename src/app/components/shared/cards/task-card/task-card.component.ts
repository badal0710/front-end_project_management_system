import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  constructor(private taskDetail: TaskdetailService,private router:Router){}

  @Input() public id!:number;
  @Input() public user!:string;

  @Output() reloadParent = new EventEmitter<string>();

  taskName:string='';
  projectName:string='';
  startDate:string='';
  endDate:string='';
  budget:string='';
  progressValue: number = 50;
  task:any=[];
  taskId:any;

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
    try {
      const body = {
        "taskStatus":progressValue
      }
      this.taskDetail.updateTask(body,this.id).subscribe((result:any)=>{
          Swal.fire('update','Task Status Updated','success'); 
      });
      this.reloadParent.emit('updatePage');
    } catch (error) {
      Swal.fire('Error','Error while updating Status of Task','error');
    }
  }

  isdue() {
    const endDateTime = new Date(this.endDate).getTime();
    const todayDateTime = new Date().getTime();
    if (endDateTime < todayDateTime) {
      if(this.progressValue == 100){
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  isSoonToBeOverdue() {
    const endDateTime = new Date(this.endDate).getTime();
    const todayDateTime = new Date().getTime();
    const differenceInMilliseconds = endDateTime - todayDateTime;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    if (differenceInDays <= 7 && differenceInDays >= 0) {
      if(this.progressValue == 100){
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
  

  deleteTask(){
    try {
      this.taskDetail.deleteTask(this.id).subscribe((result:any)=>{
       
        if (result === 200) {
          Swal.fire('Deleted','Task Deleted','success')
        } else {
          Swal.fire('Error','Error while updating Task','error')
        } 
      });
      this.reloadParent.emit('updatePage');
    } catch (error) {
      Swal.fire('Error','Error while updating Task','error')
    }
    
  }

  ngOnInit(): void {
    this.loadData(this.id);
  }

  open(){
    this.loadData(this.id);
  }

  loadData(id:Number){
    this.taskId=id;
    this.taskDetail.getOneTask(id).subscribe( (result:any) => {
      this.task=result;
      this.taskName = result.taskName;
      this.projectName = result.project.projectName;
      this.startDate = result.taskStartingDate;
      this.endDate = result.taskDeadLine;
      this.budget = result.allocatedBudget;
      this.progressValue = result.taskStatus;
    });
  }

}
