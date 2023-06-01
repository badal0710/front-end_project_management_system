import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  DATABASE_URL = DATABASE_URL;
  jwtToken = this.loginService.getToken();

  comment = 'comments';

  createTask = 'create-comment';
  deleteTask = 'delete-comment';
  getTask = 'get-task-comments';

  createProject = 'creat-project-comments';
  deleteProject = 'delete-project-comments';
  getProject = 'get-project-comment';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getTaskComment(taskId:number) {
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.comment}/${this.getTask}/${taskId}`,{ headers });
  }

  getProjectComment(projectId:number) {
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.comment}/${this.getProject}/${projectId}`,{ headers });
  }

  createTaskComment(body:any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.DATABASE_URL}/${this.comment}/${this.createTask}`,body,{ headers });
  }

  createProjectComment(body:any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.DATABASE_URL}/${this.comment}/${this.createProject}`,body,{ headers });
  }

  deleteTaskComment() {
    const headers = this.getHeaders();
    return this.http.delete(`${this.DATABASE_URL}/${this.comment}/${this.deleteTask}`,{ headers });
  }

  deleteProjectComment() {
    const headers = this.getHeaders();
    return this.http.delete(`${this.DATABASE_URL}/${this.comment}/${this.deleteProject}`,{ headers });
  }

}
