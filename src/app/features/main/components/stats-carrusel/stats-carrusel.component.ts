import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-carrusel',
  templateUrl: './stats-carrusel.component.html',
})
export class StatsCarruselComponent {
  @Input() points = 1987;
}
