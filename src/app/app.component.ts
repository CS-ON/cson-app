import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let backgroundColor = '#ffffff';
        if (event.urlAfterRedirects.includes('onboarding')) {
          backgroundColor = '#111928';
        }
        document.body.style.backgroundColor = backgroundColor;
      }
    });
  }
}
