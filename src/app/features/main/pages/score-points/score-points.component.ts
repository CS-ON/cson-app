import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-points',
  templateUrl: './score-points.component.html',
  styleUrls: ['./score-points.component.scss'],
})
export class ScorePointsComponent {
  qrResultString: any;
  constructor(private readonly router: Router) {}

  handleQrCodeResult(event: any) {
    console.log(typeof event, event);
    this.qrResultString = event;
    this.router.navigate(['/main/obtain-points']);
  }
}
