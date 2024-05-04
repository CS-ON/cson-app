import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-score-points',
  templateUrl: './score-points.component.html',
  styleUrls: ['./score-points.component.scss']
})
export class ScorePointsComponent {
  qrResultString: any;

  handleQrCodeResult(event: any) {
    console.log(typeof event, event);
    this.qrResultString = event;
  }
}
