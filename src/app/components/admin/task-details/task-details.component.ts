import { Component } from '@angular/core';
import { TaskDetailsService } from 'src/app/services/project/task-details.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  data: any[] = [];

  constructor(private taskdetailservice: TaskDetailsService) { }


  ngOnInit() {
    this.taskdetailservice.getData().subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }

}
