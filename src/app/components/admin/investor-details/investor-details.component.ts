import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent implements OnInit {
  
  constructor(private adminService: AdminService) { }

  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'/admin'
    }
  ];

  InvestorName:any='Investor\'s list ';
  InvestorAction:any=['Investor',['name','email','address','phoneno','experience','investedMoney']];
  InvestorKeys:any=[];
  InvestorValue:any=[];
  InvestorRowAction:any=[['Delete','admin/projects']];

  ProjectInvestorName:any='Project Investor list';
  ProjectInvestorAction:any=['ProjectInvestor',['invested_share','investor_id','project_id']];
  ProjectInvestorKeys:any=[];
  ProjectInvestorValue:any=[];
  ProjectInvestorRowAction:any=[['Delete','admin/projects']];

  InvestorChartName:any='Investor Experience';
  InvestorChartType:any='pie';
  InvestorChartLabel:any=[];
  InvestorChartValue:any=[];

  ngOnInit(): void {

    this.adminService.getAllInvestor().subscribe( (investors:any) => {

      for(let investor of investors){
        this.InvestorKeys.push(Object.keys(investor));
        this.InvestorValue.push(Object.values(investor));
        this.InvestorChartLabel.push(Object.values(investor)[1])
        this.InvestorChartValue.push(Object.values(investor)[6])
      }
    });

    this.adminService.getAllProjectInvestor().subscribe( (projectInvestors: any) => {

      for(let projectInvestor of projectInvestors){
        this.ProjectInvestorKeys.push(Object.keys(projectInvestor));
        this.ProjectInvestorValue.push(Object.values(projectInvestor));
      }

    } );

  

  }


}
