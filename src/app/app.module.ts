import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './components/admin/admin/admin.component';
import { InvestorComponent } from './components/investor/investor/investor.component';
import { ContractorComponent } from './components/contractor/contractor/contractor.component';
import { ReleasePageComponent } from './components/release-page/release-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { LoginsComponent } from './components/logins/logins.component'; import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

import { TaskDetailsComponent } from './components/admin/task-details/task-details.component';
import { BreadcrumbsComponent } from './components/admin/breadcrumbs/breadcrumbs.component';
import { TableComponent } from './components/admin/table/table/table.component';
import { ChartsComponent } from './components/admin/charts/charts.component';
import { ProjectDetailsComponent } from './components/admin/project-details/project-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginsComponent,
    AdminComponent,
    InvestorComponent,
    ContractorComponent,
    ReleasePageComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    TaskDetailsComponent,
    BreadcrumbsComponent,
    TableComponent,
    ChartsComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '848983964634-l65hjj1kfa82qm0uejmeebghric7njsk.apps.googleusercontent.com'
            )
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
