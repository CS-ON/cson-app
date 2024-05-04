import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './business.component.html',
})
export class BusinessComponent {
  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
  }
}
