import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { CommonModule } from '@angular/common';
import { OnboardingPageComponent } from './pages/onboarding/onboarding-page.component';
import { OnboardingCardComponent } from './components/onboarding-card/onboarding-card.component';

const pages = [OnboardingPageComponent]

@NgModule({
  declarations: [
    pages,
    OnboardingComponent,
  ],
  imports: [OnboardingCardComponent, OnboardingRoutingModule, CommonModule, ],
})
export class OnboardingModule { }
