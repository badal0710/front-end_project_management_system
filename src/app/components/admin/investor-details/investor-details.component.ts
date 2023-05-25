import { Component, OnInit } from '@angular/core';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { InvestorProjectServiceService } from 'src/app/services/investorProject/investor-project-service.service';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent implements OnInit {
  
  constructor(private investorService:InvestorService, private investorProjectServiceService: InvestorProjectServiceService) { }

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

    this.investorService.getAllInvestor().subscribe( (investors:any) => {

      for(let investor of investors){
        this.InvestorKeys.push(Object.keys(investor));
        this.InvestorValue.push(Object.values(investor));
        this.InvestorChartLabel.push(Object.values(investor)[1])
        this.InvestorChartValue.push(Object.values(investor)[6])
      }
    });

    this.investorProjectServiceService.getAllProjectInvestor().subscribe( (projectInvestors: any) => {

      for(let projectInvestor of projectInvestors){

        let keys = Object.keys(projectInvestor);
        let firstElement = keys[0];
        let lastElement = keys[keys.length - 1];
        let mykeys = [firstElement,lastElement];

        let values = Object.values(projectInvestor);
        let firstvElement = values[0];
        let lastvElement = values[values.length - 1];
        let myvalues = [firstvElement,lastvElement];

        this.ProjectInvestorKeys.push(mykeys)
        this.ProjectInvestorValue.push(myvalues);

      }

    } );

  }


}
