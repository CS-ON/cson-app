import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  constructor(private router: Router) {}
  navigateToBusinesses(): void {
    this.router.navigate(['/business']);
  }
  navigateToScorePoints(): void {
    this.router.navigate(['main/score-points']);
  }
}
