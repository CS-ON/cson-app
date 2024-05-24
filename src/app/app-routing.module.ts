import { ViewportScroller } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll } from '@angular/router';
import { filter } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./features/onboarding/onboarding.module').then(
        (module) => module.OnboardingModule
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./features/main/main.module').then((module) => module.MainModule),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./features/shopping/shopping.module').then(
        (module) => module.ShoppingModule
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./features/business/business.module').then(
        (module) => module.BusinessModule
      ),
  },
  {
    path: 'reward-detail',
    loadChildren: () =>
      import('./features/reward-detail/reward-detail.module').then(
        (module) => module.RewardDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Esta opción restaura la posición del scroll
    anchorScrolling: 'enabled' // Esta opción permite el scrolling a anclas
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private viewportScroller: ViewportScroller, router: Router) {
    router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll)
    ).subscribe(e => {
      if (e.position) {
        // Cuando se navega hacia atrás o hacia adelante, restaura la posición del scroll
        this.viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // Cuando se navega a una ancla, hace scroll a la ancla
        this.viewportScroller.scrollToAnchor(e.anchor);
      } else {
        // Cuando se navega a una nueva página, sube al inicio
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
