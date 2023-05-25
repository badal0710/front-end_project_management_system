import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContractorService } from 'src/app/services/contractor/contractor.service';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { ProjectsDetailService } from 'src/app/services/projectDetail/projects-detail.service';
import { TaskdetailService } from 'src/app/services/taskDetail/taskdetail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private router:Router, private taskdetailService:TaskdetailService,private projectsDetailService:ProjectsDetailService, private contractorService:ContractorService, private investorService:InvestorService) {}

  @Input() TableKeys:any[]=[];
  @Input() TableValue!:any[];
  @Input() TableName!:any[];
  @Input() TableAction!:any[];
  @Input() RowAction!:any[];

  public keys:any[]=[];
  public values:any[]=[];
  public actions:any[]=[];
  public rowAction:any;
  public tableAction:any;
  public columnNamess:any=[];
  public formData:any={};

  ngOnInit(): void {
    this.loadData();
  }

  delete(table:any,value:any){

    if(table==='Contractor'){
      this.contractorService.deleteContractor(value).subscribe((result:any)=>{
        if(result==200){
          Swal.fire('Delete','Contractor Deleted Successfully');
        }else{
          Swal.fire('Delete','Error occur while Deleting Contractor');
        }
      });

    }else if(table==='Investor'){

      this.investorService.deleteInvestor(value).subscribe((result:any)=>{
        if(result==200){
          Swal.fire('Delete','Investor Deleted Successfully');
        }else{
          Swal.fire('Delete','Error occur while Deleting Investor');
        }
      });

    }

  }

  loadData(){
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

      let r;

      if(this.tableAction[0]==='Task'){

        this.taskdetailService.createTask(this.formData).subscribe((result:any)=>{
          if(result==200){
            Swal.fire('result','Task Successfully Added');
            this.router.navigateByUrl('/admin/dashboard');
          }else{
            Swal.fire('result','Something Went Wrong while Adding Task');
          }
        });

      }

      else if(this.tableAction[0]==='Project'){

        this.projectsDetailService.createProject(this.formData).subscribe((result:any)=>{
          if(result=='OK'){
            Swal.fire('result','Project Successfully Added');
            this.router.navigateByUrl('/admin/dashboard');
          }else{
            Swal.fire('result','Something Went Wrong while Adding Project');
          }
        });

      }

      else if(this.tableAction[0]==='Investor'){
        
        this.investorService.createInvestor(this.formData).subscribe((result:any)=>{
          if(result==200){
            Swal.fire('result','Investor SuccessFully Added');
            this.router.navigateByUrl('/admin/investorDetail');
          }else{
            Swal.fire('result','Something Went Wrong while Adding Investor');
          }
        });

      }

      else if(this.tableAction[0]==='Contractor'){

        this.contractorService.createContractor(this.formData).subscribe((result:any)=>{
          if(result==200){
            Swal.fire('result','Contractor SuccessFully Added');
            this.router.navigateByUrl('/admin/contractorDetail');
          }else{
            Swal.fire('result','Something Went Wrong while Adding Contractor');
          }
        });
        
      }

      else if(this.tableAction[0]==='ProjectInvestor'){

        this.contractorService.createContractor(this.formData).subscribe((result:any)=>{
          if(result==200){
            Swal.fire('result','Investor SuccessFully Added to project');
            this.router.navigateByUrl('/admin/contractorDetail');
          }else{
            Swal.fire('result','Something Went Wrong while Adding Investor');
          }
        });
        
      }

    }

  }

  validate(data:any){
    return true;
  }

}
