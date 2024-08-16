import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownVisible: boolean = false;

  logo: string = 'assets/img/logo/logo_light_new.png';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
      navbar?.classList.add('scrolled');
      this.logo = 'assets/img/logo//moneytor_logo_dark_new.png'; 
    } else {
      navbar?.classList.remove('scrolled');
      this.logo = 'assets/img/logo/logo_light_new.png';
    }
  }

 

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.dropdownVisible = false;
  }
}
