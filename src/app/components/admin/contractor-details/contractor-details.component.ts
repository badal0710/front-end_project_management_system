import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContractorService } from 'src/app/services/contractor/contractor.service';
import { typeOfContractor } from '../../shared/helper/list';
import Swal from 'sweetalert2';

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
  listOfContractorType:string[]=typeOfContractor;
  contractors:any[]=[];

  ngOnInit(): void {
    this.allContractors();
  }

  allContractors(){
    this.contractorService.getAllContractor().subscribe( (contractors:any) => {
      for(let contractor of contractors){
         this.contractors.push(contractor);
      }
    });
  }

  delete(contractorId:any){
    this.contractorService.deleteContractor(contractorId).subscribe((result:any)=>{
      Swal.fire("Deleted","Contractor Deleted SuccessFully");
      this.reloadPage();
    });
  }

  createContractor(data:NgForm){

    const body = {
      "contractorId":null,
      "contractorName":data.value.name,
      "jobRole":data.value.type,
      "email":data.value.email,
      "phoneNo":data.value.phone,
      "address":data.value.address,
      "experience":data.value.experience
    }

    this.contractorService.createContractor(body).subscribe((result:any)=>{
      if(result==200){
        Swal.fire("Created","New Contractor Added");
      }else{
        Swal.fire("Error","Error while Adding Contractor");
      }
      this.reloadPage();
    });
    
  }

  reloadPage(){
    setTimeout(() => {
      location.reload();
    }, 3000);
  }

}
