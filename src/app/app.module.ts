import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './components/admin/admin/admin.component';
import { InvestorComponent } from './components/investor/investor/investor.component';
import { ContractorComponent } from './components/contractor/contractor/contractor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { HeaderComponent } from './components/shared/header/header.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { TaskDetailsComponent } from './components/admin/task-details/task-details.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { ProjectDetailsComponent } from './components/admin/project-details/project-details.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { InvestorDetailsComponent } from './components/admin/investor-details/investor-details.component';
import { ContractorDetailsComponent } from './components/admin/contractor-details/contractor-details.component';
import { CdashboardComponent } from './components/contractor/cdashboard/cdashboard.component';
import { IdashboardComponent } from './components/investor/idashboard/idashboard.component';
import { TaskCardComponent } from './components/shared/cards/task-card/task-card.component';
import { ProjectCardComponent } from './components/shared/cards/project-card/project-card/project-card.component';
import { CommentCardComponent } from './components/shared/cards/comment-card/comment-card.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    InvestorComponent,
    ContractorComponent,
    HeaderComponent,
    DashboardComponent,
    TaskDetailsComponent,
    BreadcrumbsComponent,
    ProjectDetailsComponent,
    CardsComponent,
    InvestorDetailsComponent,
    ContractorDetailsComponent,
    CdashboardComponent,
    IdashboardComponent,
    TaskCardComponent,
    ProjectCardComponent,
    CommentCardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    NgxUiLoaderModule.forRoot({
      "bgsColor": "black",
      "bgsOpacity": 0.9,
      "bgsPosition": "center-center",
      "bgsSize": 60,
      "bgsType": "ball-spin",
      "blur": 5,
      "delay": 0,
      "fastFadeOut": true,
      "fgsColor": "black",
      "fgsPosition": "center-center",
      "fgsSize": 60,
      "fgsType": "ball-spin-clockwise",
      "gap": 63,
      "logoPosition": "center-center",
      "logoSize": 120,
      "logoUrl": "",
      "masterLoaderId": "master",
      "overlayBorderRadius": "0",
      "overlayColor": "rgba(40, 40, 40, 0.8)",
      "pbColor": "black",
      "pbDirection": "ltr",
      "pbThickness": 7,
      "hasProgressBar": true,
      "text": "Loding....",
      "textColor": "black",
      "textPosition": "center-center",
      "maxTime": -1,
      "minTime": 300
    }),

    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
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
