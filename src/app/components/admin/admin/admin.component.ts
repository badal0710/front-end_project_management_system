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
  public projectStatus: Number[]=[];
  public chartValues!:Number[];
  public chartColors!:String[];

  ngOnInit(): void {

    // Chart 
    this.adminService.getAllProject().subscribe((items:any)=>{
        for(let item of items){
          this.projectStatus.push(item.projectStatus);
        }
      });

    this.chartValues=this.projectStatus;
    this.chartColors=['red'];
  }

}
