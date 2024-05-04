import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
  }
}
