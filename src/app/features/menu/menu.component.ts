import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateToRewardsCenter(): void {
    this.router.navigate(['/main/rewards-center']);
  }

  navigateToMain(): void {
    this.router.navigate(['/']);
  }

  navigateToHowItWorks(): void {
    this.router.navigate(['/main/how-it-works']);
  }

  navigateToShopping(): void {
    this.router.navigate(['/shopping']);
  }

}
