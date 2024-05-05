import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() points = 1987; // @todo Pablo: Global point counter. store?

  isMainDirect = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    const url = this.router.url;
    if (url === '/main') {
      this.isMainDirect = true;
    }
  }
}
