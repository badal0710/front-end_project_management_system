import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toggle:Boolean=false;
  sidebarToggle(){
    if(!this.toggle){
      this.toggle=true;
      document.getElementById("sideContent")?.classList.add("content");
      document.getElementById("mainContent")?.classList.add("sidePlease");
    }else{
      this.toggle=false;
      document.getElementById("sideContent")?.classList.remove("content");
      document.getElementById("mainContent")?.classList.remove("sidePlease");
    }
  }

}
