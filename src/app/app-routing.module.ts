import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
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
          import('./features/main/main.module').then(
            (module) => module.MainModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
