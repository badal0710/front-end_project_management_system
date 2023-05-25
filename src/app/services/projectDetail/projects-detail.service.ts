import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../login/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDetailService {

  database_url = 'http://localhost:9090';
  jwtToken = this.authservice.getToken();
  
  projectController = 'project';

  /**
  *     @PostMapping("/create-project")
  */
  createProject = 'create-project';
  /**
   *   @GetMapping("/getAllProjectOfOneInvestor/{investorEmail}")
   */
  AllProjectOfOneInvestor = 'getAllProjectOfOneInvestor';
  /**
   *     @GetMapping("/{projectId}")
   */
  getOne = '';
  /**
   *     @GetMapping("/AllProjects")
   */
  getAll = 'AllProjects';
  /**
   *     @PutMapping("/update-project/{projectId}")
   */
  update = 'update-project';
  /**
   *     @DeleteMapping("/delete-project/{projectId}")
   */
  delete = 'delete-project';
  /**
   *     @GetMapping("/project-investor/{projectId}")
   */
  projectInvestor = 'project-investor';
  /**
   *     @GetMapping("/task-details/{projectId}/filterDates")
   */
  taskDetail = 'task-details';
  /**
   *     @GetMapping("/project-status-date/{startingDate/{endingDate}/{projectStatus}")
   */
  projectStatusDate = 'project-status-date';
  /**
   *   @GetMapping("/totalProject")
   */
  countProject = 'totalProject';

  constructor(private http: HttpClient, private authservice: UserAuthService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }


  getAllProject(){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.getAll}`,{ headers });
  }

  getOneProject(id:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.getOne}${id}`,{ headers });
  }

  deleteProject(id: any){
    const headers = this.getHeaders();
    return this.http.delete(`${this.database_url}/${this.projectController}/${this.delete}/${id}`,{ headers });
  }

  updateProject(body: any, id: any){
    const headers = this.getHeaders();
    return this.http.put(`${this.database_url}/${this.projectController}/${this.update}/${id}`,body,{ headers });
  }

  getAllProjectOfOneInvestor(email:string|null){
    console.log(this.AllProjectOfOneInvestor)
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.AllProjectOfOneInvestor}/${email}`,{ headers });
  }


}
