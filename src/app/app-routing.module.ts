import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ContractorComponent } from './components/contractor/contractor/contractor.component';
import { InvestorComponent } from './components/investor/investor/investor.component';
import { ReleasePageComponent } from './components/release-page/release-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'release',
    pathMatch: 'full'
  },
  {
    path: 'release',
    component: ReleasePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'contractor',
    component: ContractorComponent
  },
  {
    path: 'investor',
    component: InvestorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
