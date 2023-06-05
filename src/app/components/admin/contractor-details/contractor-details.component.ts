import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContractorService } from 'src/app/services/contractor/contractor.service';
import { typeOfContractor } from '../../shared/helper/list';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css']
})
export class ContractorDetailsComponent implements OnInit {

  constructor(private contractorService:ContractorService, private loginService:LoginService) { }

  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'/admin'
    }
  ];
  listOfContractorType:string[]=typeOfContractor;
  contractors:any[]=[];

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.allContractors();
  }

  resetData(){
    this.contractors=[];
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
      Swal.fire("Deleted","Contractor Deleted SuccessFully",'success');
      this.reloadPage();
    });
  }

  createContractor(data:NgForm){
    if(this.isValid(data)){
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
          this.signUpContractor(body);
          Swal.fire("Created","New Contractor Added",'success');
        }else{
          Swal.fire("Error","Error while Adding Contractor",'error');
        }
        this.reloadPage();
      });
    }    
  }

  signUpContractor(body:any){
    let signupBody = {
      "username":body.contractorName,
      "email":body.email,
      "password":"password",
      "role":["contractor"]
    }
    this.loginService.userSignUp(signupBody).subscribe();
  }

  isValid(formValues: NgForm): boolean {
    let msg = '<ui style="text-align:left">';
    let error = 0;
    if (!formValues.value.name || formValues.value.name.trim() === '') {
      msg += '<li>Name is require</li>';
      error++; 
    }
  
    if (!formValues.value.email) {
      msg += '<li> Email is require </li>';
      error++;
    }
    else{
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,63}$/;
      if(!regex.test(formValues.value.email)){
        msg += `<li> Email is not valid : ${formValues.value.email}  </li>`;
        error++;
      }
    }
  
    if (!formValues.value.phone) {
      msg += '<li>phone number is require</li>';
      error++;
    }else{
      if (formValues.value.phone.toString().length!=10) {
        msg += '<li>phone number must be 10 digit</li>';
        error++;
      }
    }
  
    if (!formValues.value.address) {
      msg += '<li>Address is require</li>';
      error++;
    }

    if (!formValues.value.type) {
      msg += '<li>type is require</li>';
      error++;
    }
  
    if (!formValues.value.experience) {
      msg += '<li> experience is require </li>';
      error++;
    }

    if(error==0){
      return true;
    }else{
      msg += '</ui></div>';
      Swal.fire('Error',msg,'error');
      return false;
    }
  
  }

  reloadPage(){
    setTimeout(() => {
      this.resetData();
      this.loadData();
    }, 3000);
  }

}
