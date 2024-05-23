import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.component.html',
  styleUrls: ['./reward-detail.component.scss'],
})
export class RewardDetailComponent {

  menuOpen = false;

  constructor(private router: Router) {}

  navigateToBusiness(): void {
    this.router.navigate(['/business']);
  }


  isMenuOpen(isToggled: boolean): void {
    this.menuOpen = isToggled;
  }
}
