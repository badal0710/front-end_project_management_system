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
  InvestorAction:any=['Investor',['name','email','address','phoneno','experience']];
  InvestorKeys:any=[];
  InvestorValue:any=[];
  InvestorRowAction:any=[['View','admin/projects']];

  InvestorChartName:any='Investor Experience';
  InvestorChartType:any='pie';
  InvestorChartLabel:any=[];
  InvestorChartValue:any=[];

  ngOnInit(): void {

    this.adminService.getAllInvestor().subscribe( (investors:any) => {

      for(let investor of investors){

        this.InvestorKeys.push(Object.keys(investor));
        this.InvestorValue.push(Object.values(investor));

        this.InvestorChartLabel.push(Object.keys(investor)[5])
        this.InvestorChartValue.push(Object.values(investor.experience))
      }
    });

  }


}
