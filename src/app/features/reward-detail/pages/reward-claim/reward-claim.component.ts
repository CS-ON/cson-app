
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reward-claim',
  templateUrl: './reward-claim.component.html',
})
export class RewardClaimComponent {
  @Output() isReclamed: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuOpen = false;

  isMenuOpen(isToggled: boolean): void {
    this.menuOpen = isToggled;
  }

  goBack(){
    this.isReclamed.emit(false)
  }

  rewardReclamed(){
    this.isReclamed.emit(true)
  }
}
