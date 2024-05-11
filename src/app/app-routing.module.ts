import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
