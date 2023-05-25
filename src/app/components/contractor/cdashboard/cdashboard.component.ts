import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent implements OnInit {

   inProgress: number[] = [];
   notStart: number[] = [];
   done: number[] = [];

  constructor(private taskdetail:TaskdetailService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.taskdetail.getAllTasks().subscribe((tasks:any)=>{
      for (let task of tasks) {
        console.log(task);
        if(task.taskStatus===0){
          this.notStart.push(task.taskId);
        }else if(task.taskStatus===100){
          this.done.push(task.taskId);
        }else{
          this.inProgress.push(task.taskId);
        }
      }
    });
  }

}
