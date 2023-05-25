import { Component, OnInit } from '@angular/core';

import { ContractorService } from 'src/app/services/contractor/contractor.service';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css']
})
export class ContractorDetailsComponent implements OnInit {

  constructor(private contractorService:ContractorService) { }

  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'/admin'
    }
  ];

  ContractorName:any='Contractor\'s List';
  ContractorAction:any=['Contractor',['contractorName','email','phoneNo','jobRole','experience','address']];
  ContractorKeys:any=[];
  ContractorValue:any=[];
  ContractorRowAction:any=[['Delete','admin/projects']];;

  ContractorChartName:any;
  ContractorChartType:any='pie';
  ContractorChartLabel:any=[];
  ContractorChartValue:any=[];

  ngOnInit(): void {

    this.contractorService.getAllContractor().subscribe( (contractors:any) => {

      for(let contractor of contractors){

        this.ContractorKeys.push(Object.keys(contractor));
        this.ContractorValue.push(Object.values(contractor));

        this.ContractorChartLabel.push(Object.values(contractor)[1])
        this.ContractorChartValue.push(Object.values(contractor)[6])
      }
    });

  }

}
