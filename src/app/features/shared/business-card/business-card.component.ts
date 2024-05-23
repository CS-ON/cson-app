import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/interfaces/business.interface';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
})
export class BusinessCardComponent {

  @Input() bussiness!: Business;

  constructor(private router: Router) {}

  navigateToBusiness(): void {
    this.router.navigate(['/business']);
  }
}
