import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards-center',
  templateUrl: './rewards-center.component.html',
  styleUrls: ['./rewards-center.component.scss'],
})
export class RewardsCenterComponent {
  showRedeemed: boolean = false;

  toggleView(showRedeemed: boolean): void {
    this.showRedeemed = showRedeemed;
  }
}
