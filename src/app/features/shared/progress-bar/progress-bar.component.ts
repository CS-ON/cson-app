import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() currentPoints: number = 437;
  @Input() totalPoints: number = 1000;

  get progress(): number {
    return (this.currentPoints / this.totalPoints) * 100;
  }
}
