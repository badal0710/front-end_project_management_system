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

  
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty    
  }

}
