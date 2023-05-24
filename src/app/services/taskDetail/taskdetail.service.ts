import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskdetailService {

  DATABASE_URL = 'http://localhost:9090';

  taskDetail = 'taskofproject';
  project = 'project';

  allTask = "all-task";
  createTask = 'create-task';
  updateTask = 'update-task';
  deleteTask = 'delete-task';
  oneTask = 'getOneTask';
  allTaskOfOneProject = 'task-details';



  constructor(private http: HttpClient) { }

  getAllTasks(){
    return this.http.get(`${this.DATABASE_URL}/${this.taskDetail}/${this.allTask}`);
  }

  getOneTask(id:any){
    return this.http.get(`${this.DATABASE_URL}/${this.taskDetail}/${this.oneTask}/${id}`);
  }

  getAllTaskOfOneProject(id:any){
    return this.http.get(`${this.DATABASE_URL}/${this.project}/${this.allTaskOfOneProject}/${id}/filterDates`);
  }
  
}
