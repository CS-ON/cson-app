import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-card',
  templateUrl: './reward-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RewardCardComponent {
  constructor(private router: Router) {}

  @Input() totalPoints: number = 1000;
  @Input() redeemed: boolean = false;
  @Input() image: string = '';
  @Input() name: string = '';
  currentPoints: number = 328;

  navigateToRewardDetail(): void {
    this.router.navigate(['/reward-detail']);
  }
}
