import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ContractorComponent } from './components/contractor/contractor/contractor.component';
import { InvestorComponent } from './components/investor/investor/investor.component';
import { ReleasePageComponent } from './components/release-page/release-page.component';
import { TaskDetailsComponent } from './components/admin/task-details/task-details.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './components/admin/project-details/project-details.component';

const routes: Routes = [

  //release
  {
    path: '', component: ReleasePageComponent
  },

  //admin
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

  //component
  {
    path: 'contractor',component: ContractorComponent,
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

  //investor
  {
    path: 'investor',component: InvestorComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
