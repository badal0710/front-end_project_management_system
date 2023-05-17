import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  constructor( private adminService: AdminService ) { }

  // Chart
  // public chartValues!:any;
  // public chartLabels!:any;
  
  ngOnInit(): void {
    
    // let projectStatus: any[]=[];
    // let projectNames: any[]=[];

    // // Chart 
    // this.adminService.getAllProject().subscribe((items:any)=>{
    //     for(let item of items){
    //       projectStatus.push(item.projectStatus);
    //       projectNames.push(item.projectName);
    //     }
    //   });
    // this.chartValues=projectStatus;
    // this.chartLabels=projectNames;
  }

}
