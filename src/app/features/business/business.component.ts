import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent {
  menuOpen = false;

  isMenuOpen(isToggled: boolean): void {
    this.menuOpen = isToggled;
  }
}
