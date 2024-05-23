import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/interfaces/business.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  business!: Business;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBusinessesById(1).subscribe((result) => {
     this.business = result
    })
  }
}
