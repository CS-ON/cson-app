import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingPageComponent } from './pages/onboarding/onboarding-page.component';


const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      {
        path: '',
        component: OnboardingPageComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
