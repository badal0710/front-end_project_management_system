import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  ngOnInit(): void {
  }

  loggedIn(){
    if(localStorage.getItem('UPN')){
      return true;
    }else{
      return false;
    }
  }

}
