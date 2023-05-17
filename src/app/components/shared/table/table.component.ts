import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private adminService:AdminService) {}

  @Input() TableKeys:any[]=[];
  @Input() TableValue!:any[];
  @Input() TableName!:any[];
  @Input() TableAction!:any[];
  @Input() RowAction!:any[];
  // @Input() ColumnNames:any=[];

  public keys:any[]=[];
  public values:any[]=[];
  public actions:any[]=[];
  public rowAction:any;
  public tableAction:any;
  public columnNamess:any=[];
  public formData:any={};

  ngOnInit(): void {
    this.keys=this.TableKeys;
    this.values=this.TableValue;
    this.actions=this.RowAction;
    this.rowAction=this.RowAction;
    this.tableAction=this.TableAction;

    for(let a of this.tableAction[1]){
      this.formData[a]=null;
    }
  }

  submitForm(){

    if(this.validate(this.formData)){

      if(this.tableAction[0]==='Task'){
        alert("task table");
        this.adminService.createTask(this.formData).subscribe((result:any)=>{
          console.log("result: ",result);
        });
      }
      else if(this.tableAction[0]==='Project'){
        alert("project table");
        this.adminService.createProject(this.formData).subscribe((result:any)=>{
          console.log("result: ",result);
        });
      }
      else if(this.tableAction[0]==='Investor'){
        alert("investor table");
        this.adminService.createInvestor(this.formData).subscribe((result:any)=>{
          console.log("result: ",result);
        });
      }
      else if(this.tableAction[0]==='Contractor'){
        alert("contractor table");
        this.adminService.createContractor(this.formData).subscribe((result:any)=>{
          console.log("result: ",result);
        });
      }

    }

  }

  validate(data:any){
    return true;
  }

}
