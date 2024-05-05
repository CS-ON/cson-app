import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';

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
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./features/business/business.module').then((module) => module.BusinessModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
