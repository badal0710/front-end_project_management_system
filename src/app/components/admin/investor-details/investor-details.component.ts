import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InvestorService } from 'src/app/services/investor/investor.service';
import { InvestorProjectServiceService } from 'src/app/services/investorProject/investor-project-service.service';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent implements OnInit {
  
  constructor(private router:Router,private investorService:InvestorService, private investorProjectServiceService: InvestorProjectServiceService, private loginService:LoginService) { }

  myBreadCrumbs:any = [
    {
      name:'Home',
      url:'/admin'
    }
  ];

  projectInvestors:any[]=[];

  Investors:any[]=[];

  ngOnInit(): void {
    this.loadData();
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
    Swal.fire('Accepted', 'Investor Added to Project','success');
    this.investorProjectServiceService.acceptInvestmentRequest(id).subscribe((result:any)=>{
    });
    // this.router.navigate(['/admin']);
    this.reloadPage();
  }

  delete(investorId:any){
    this.investorService.deleteInvestor(investorId).subscribe((result:any)=>{
      Swal.fire("Deleted","Investor Deleted SuccessFully",'success');
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
          this.signUpInvestor(body);
          Swal.fire("Created","New Investor Added",'success');
        }else{
          Swal.fire("Error","Error while Adding Investor",'error');
        }
        this.reloadPage();
      });
    }
  
  }

  signUpInvestor(body:any){
    let signupBody = {
      "username":body.name,
      "email":body.email,
      "password":"password",
      "role":["investor"]
    }
    this.loginService.userSignUp(signupBody).subscribe();
  }

  isValid(formValues: NgForm): boolean {
    let msg = '<ui style="text-align:left">';
    let error = 0;
    if (!formValues.value.name || formValues.value.name.trim() === '') {
      msg += '<li>Name is require</li>';
      error++; 
    }else{
      let regex = /[^\w\s]|[\d]/g;
      let result = regex.test(formValues.value.name);
      if(result){
        msg += '<li>Special Character or Digits not allowed on Names </li>';
        error++; 
      }
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
      if (formValues.value.phone.toString().length!==10) {
        msg += `<li>phone number must be 10 digit ${formValues.value.phone} ${formValues.value.phone.length} </li>`;
        error++;
      }
    }
  
    if (!formValues.value.address) {
      msg += '<li>Address is require</li>';
      error++;
    }
  
    if (!formValues.value.experience) {
      msg += `<li> experience is require  </li>`;
      error++;
    }else{
      if(formValues.value.experience < 0 || formValues.value.experience > 100){
        msg += `<li> experience must be between 0 to 100  </li>`;
        error++;
      }
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

  loadData(){
    this.allInvestors();
    this.getRequestOfInvestments();
  }

  resetData(){
    this.projectInvestors=[];
    this.Investors=[];
  }

}
