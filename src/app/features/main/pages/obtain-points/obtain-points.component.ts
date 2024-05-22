import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-points',
  templateUrl: './obtain-points.component.html',
  styleUrls: ['./obtain-points.component.scss']
})
export class ObtainPointsComponent {
  @Input() newPoints = Math.floor(Math.random() * (50 - 8 + 1) + 8);;

  constructor(private readonly router: Router) {}

  goToMain() {
    this.router.navigate(['/main']);
  }
}
