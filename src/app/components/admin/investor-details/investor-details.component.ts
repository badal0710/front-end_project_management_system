import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { InvestorProjectServiceService } from 'src/app/services/investorProject/investor-project-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent implements OnInit {
  
  constructor(private router:Router,private investorService:InvestorService, private investorProjectServiceService: InvestorProjectServiceService) { }

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

  projectInvestors:any[]=[];

  Investors:any[]=[];

  ngOnInit(): void {

    this.allInvestors();
    this.getRequestOfInvestments();


    // this.investorProjectServiceService.getAllProjectInvestor().subscribe( (projectInvestors: any) => {

    //   for(let projectInvestor of projectInvestors){

    //     let keys = Object.keys(projectInvestor);
    //     let firstElement = keys[0];
    //     let lastElement = keys[keys.length - 1];
    //     let mykeys = [firstElement,lastElement];

    //     let values = Object.values(projectInvestor);
    //     let firstvElement = values[0];
    //     let lastvElement = values[values.length - 1];
    //     let myvalues = [firstvElement,lastvElement];

    //     this.ProjectInvestorKeys.push(mykeys)
    //     this.ProjectInvestorValue.push(myvalues);

    //   }

    // } );


  }

  getRequestOfInvestments(){
    this.investorProjectServiceService.getAllProjectInvestor().subscribe( (projectInvestors:any)=>{
      for(let projectInvestor of projectInvestors){
        if(projectInvestor.status==='pending'){
          this.projectInvestors.push(projectInvestor);
        }
      }
    });
  }

  allInvestors(){
      this.investorService.getAllInvestor().subscribe((investors:any)=>{
        for(let investor of investors){
          
          this.Investors.push(investor);
        }
      })
  }

  acceptInvestmentRequest(id:any){
    Swal.fire('Accepted', 'Investor Added to Project');
    this.investorProjectServiceService.acceptInvestmentRequest(id).subscribe((result:any)=>{
    });
    this.router.navigate(['/admin']);
  }

  // rejectInvestmentRequest(data:any){
  // }

  delete(investorId:any){
    this.investorService.deleteInvestor(investorId).subscribe((result:any)=>{
      Swal.fire("Deleted","Investor Deleted SuccessFully");
      this.reloadPage();
    });
  }

  createInvestor(data:NgForm){
    
    if(this.isValid(data)){
      const body = {
        "investorId":null,
        "name":data.value.name,
        "InvestedMoney":0,
        "email":data.value.email,
        "phoneno":data.value.phone,
        "address":data.value.address,
        "experience":data.value.experience
      }
  
      this.investorService.createInvestor(body).subscribe((result:any)=>{
        if(result==200){
          Swal.fire("Created","New Contractor Added");
        }else{
          Swal.fire("Error","Error while Adding Contractor");
        }
        this.reloadPage();
      });
    }
  
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
      if (formValues.value.phone.length!=10) {
        msg += '<li>phone number must be 10 digit</li>';
        error++;
      }
    }
  
    if (!formValues.value.address) {
      msg += '<li>Address is require</li>';
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
      location.reload();
    }, 3000);
  }


}
