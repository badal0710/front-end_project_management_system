import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private readonly googleAuth: SocialAuthService, private router: Router) { }

  public static toggle: Boolean = false;

  sidebarToggle() {
    if (!HeaderComponent.toggle) {
      HeaderComponent.toggle = true;
      document.getElementById("sideContent")?.classList.add("content");
      document.getElementById("mainContent")?.classList.add("sidePlease");
    } else {
      HeaderComponent.toggle = false;
      document.getElementById("sideContent")?.classList.remove("content");
      document.getElementById("mainContent")?.classList.remove("sidePlease");
    }
  }

  Logout() {
    this.googleAuth.signOut();
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

  contactUs() {
    this.router.navigateByUrl('/contectUs')
  }

  profile() {
    this.router.navigateByUrl('/profile')
  }

}
