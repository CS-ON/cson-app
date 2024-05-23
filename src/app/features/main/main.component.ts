import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {

  menuOpen = false;

  isMenuOpen(isToggled: boolean): void {
    this.menuOpen = isToggled;
  }


}
