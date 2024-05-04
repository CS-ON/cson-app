import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onboarding-card',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="flex flex-col gap-4 ">
    <p class="text-3xl font-bold">
      {{ title }}
    </p>
    <p class="text-lg text-gray-700 font-normal" [innerHTML]="description"></p>
  </div>`,
})
export class OnboardingCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
