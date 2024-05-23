import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MockDataInitializerService } from './services/mock-data-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private mockDataInitService: MockDataInitializerService
  ) {}

  ngOnInit() {
    this.mockDataInitService.initializeData().subscribe(() => {
      console.log('Data initialization complete.');
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let backgroundColor = '#ffffff';
        if (event.urlAfterRedirects.includes('onboarding') || event.urlAfterRedirects.includes('menu') ) {
          backgroundColor = '#111928';
        }
        document.body.style.backgroundColor = backgroundColor;
      }
    });

  }
}
