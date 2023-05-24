import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDetailService {

  database_url = 'http://localhost:9090';
  
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

  constructor(private http: HttpClient) { }

  getAllProject(){
    return this.http.get(`${this.database_url}/${this.projectController}/${this.getAll}`);
  }

  getOneProject(id:any){
    return this.http.get(`${this.database_url}/${this.projectController}/${this.getOne}/${id}`);
  }

  deleteProject(id: any){
    return this.http.delete(`${this.database_url}/${this.projectController}/${this.delete}/${id}`);
  }

  updateProject(body: any, id: any){
    return this.http.put(`${this.database_url}/${this.projectController}/${this.update}/${id}`,body);
  }

  getAllProjectOfOneInvestor(email:string|null){
    return this.http.get(`${this.database_url}/${this.projectController}/${this.AllProjectOfOneInvestor}/${email}`);
  }


}
