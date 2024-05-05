// src/app/components/reward-card/reward-card.component.ts
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-reward-card',
  templateUrl: './reward-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RewardCardComponent {
  @Input() totalPoints: number = 1000;
  @Input() redeemed: boolean = false;
  currentPoints: number = 328; // @todo Pablo: Global point counter. store?

  get progress(): number {
    return (this.currentPoints / this.totalPoints) * 100;
  }
}
