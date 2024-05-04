import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
})
export class HowItWorks {
  constructor(private readonly router: Router) {}

goToMenu() {
  this.router.navigate(['/menu'])
}

 }
