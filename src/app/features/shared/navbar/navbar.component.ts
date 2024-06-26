import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() points = 398; // @todo Pablo: Global point counter. store?

  isMainDirect = false;

  menuOpen = false;

  @Output() isMenuOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    const url = this.router.url;
    if (url === '/main') {
      this.isMainDirect = true;
    }
  }



  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.isMenuOpen.emit(this.menuOpen)
  }

  navigateToRewardsCenter(): void {
    this.menuOpen = false;
    this.isMenuOpen.emit(this.menuOpen)
    this.router.navigate(['/main/rewards-center']);
  }

  navigateToMain(): void {
    this.menuOpen = false;
    this.isMenuOpen.emit(this.menuOpen)
    this.router.navigate(['/']);
  }

  navigateToHowItWorks(): void {
    this.menuOpen = false;
    this.isMenuOpen.emit(this.menuOpen)
    this.router.navigate(['/main/how-it-works']);
  }

  navigateToShopping(): void {
    this.menuOpen = false;
    this.isMenuOpen.emit(this.menuOpen)
    this.router.navigate(['/shopping']);
  }

  onClickGoBack(): void {
    this.location.back()
  }
}
