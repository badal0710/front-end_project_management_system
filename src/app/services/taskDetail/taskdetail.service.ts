import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../login/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskdetailService {

  DATABASE_URL = 'http://localhost:9090';
  jwtToken = this.authservice.getToken();

  taskDetail = 'taskofproject';
  project = 'project';

  allTask = "all-task";
  createTask = 'create-task';
  updateTask = 'update-task';
  deleteTask = 'delete-task';
  oneTask = 'getOneTask';
  allTaskOfOneProject = 'task-details';

  constructor(private http: HttpClient, private authservice: UserAuthService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getAllTasks(){
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.taskDetail}/${this.allTask}`,{ headers });
  }

  getOneTask(id:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.taskDetail}/${this.oneTask}/${id}`,{ headers });
  }

  getAllTaskOfOneProject(id:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.project}/${this.allTaskOfOneProject}/${id}/filterDates`,{ headers });
  }
  
}
