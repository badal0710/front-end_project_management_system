import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ContractorComponent } from './components/contractor/contractor/contractor.component';
import { InvestorComponent } from './components/investor/investor/investor.component';

import { TaskDetailsComponent } from './components/admin/task-details/task-details.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './components/admin/project-details/project-details.component';
import { LoginComponent } from './components/login/login.component';

import { InvestorDetailsComponent } from './components/admin/investor-details/investor-details.component';
import { ContractorDetailsComponent } from './components/admin/contractor-details/contractor-details.component';

import { CdashboardComponent } from './components/contractor/cdashboard/cdashboard.component';
import { IdashboardComponent } from './components/investor/idashboard/idashboard.component';
import { ProfilePageComponent } from './components/shared/profile-page/profile-page.component';
import { ContactUsComponent } from './components/shared/contact-us/contact-us.component';

const routes: Routes = [

  //release
  {
    path: '', component: LoginComponent
  },
  {
    path: 'profile', component: ProfilePageComponent
  },
  {
    path: 'contectUs', component: ContactUsComponent
  },

  //admin
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'investorDetail', component: InvestorDetailsComponent
      },
      {
        path: 'contractorDetail', component: ContractorDetailsComponent
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
    path: 'contractor', component: ContractorComponent,
    children: [
      {
        path: '', component: CdashboardComponent
      },
      {
        path: 'dashboard', component: CdashboardComponent
      },
      {
        path: 'profile', component: ProfilePageComponent
      },
    ]
  },

  //investor
  {
    path: 'investor', component: InvestorComponent,
    children: [
      {
        path: '', component: IdashboardComponent,
      },
      {
        path: 'dashboard', component: IdashboardComponent,
      },
      {
        path: 'profile', component: ProfilePageComponent
      },
    ]
  },

  //login
  {
    path: 'login', component: LoginComponent
  },

  //error
  {
    path: 'errorPage', component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
