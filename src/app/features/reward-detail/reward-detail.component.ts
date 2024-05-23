import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.component.html',
  styleUrls: ['./reward-detail.component.scss'],
})
export class RewardDetailComponent {

  menuOpen = false;

  isReclamed = true;

  constructor(private router: Router) {}

  navigateToBusiness(): void {
    this.router.navigate(['/business']);
  }

  isReclamedOutput(isReclamed:boolean){
    this.isReclamed = isReclamed;
  }


  isMenuOpen(isToggled: boolean): void {
    this.menuOpen = isToggled;
  }
}
