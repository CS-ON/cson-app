import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBusinesses().subscribe((result) => {
      console.log(result);
    });
  }
}
