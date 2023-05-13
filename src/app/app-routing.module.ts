import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ContractorComponent } from './components/contractor/contractor/contractor.component';
import { InvestorComponent } from './components/investor/investor/investor.component';
import { ReleasePageComponent } from './components/release-page/release-page.component';
import { LoginsComponent } from './components/logins/logins.component';
import { TaskDetailsComponent } from './components/admin/task-details/task-details.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './components/admin/project-details/project-details.component';

const routes: Routes = [

  {
    path: '', component: ReleasePageComponent
  },
  // {
  //   path: 'login',component: LoginComponent
  // },
  // {
  //   path: 'logins',component: LoginsComponent
  // },
  {
    path: 'admin',component: AdminComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'projects', component: ProjectDetailsComponent
      },
      {
        path: 'projects/:id', component: ProjectDetailsComponent
      },
      {
        path: 'tasks', component: TaskDetailsComponent
      },
      {
        path: 'tasks/:id', component: TaskDetailsComponent
      }
    ]
    
  },
  // {
  //   path: 'task-details/:id',component: TaskDetailsComponent
  // },
  {
    path: 'contractor',component: ContractorComponent
  },
  {
    path: 'investor',component: InvestorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
