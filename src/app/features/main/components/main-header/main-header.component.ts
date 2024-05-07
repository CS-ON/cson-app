import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  constructor(private router: Router) {}
  navigateToShopping(): void {
    this.router.navigate(['/shopping']);
  }
  navigateToScorePoints(): void {
    this.router.navigate(['main/score-points']);
  }
}
