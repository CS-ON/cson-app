import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BusinessCardComponent } from './business-card/business-card.component';
import { RewardCardComponent } from './reward-card/reward-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BusinessCardComponent,
    BusinessCardComponent,
    RewardCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    BusinessCardComponent,
    BusinessCardComponent,
    RewardCardComponent,
  ],
})
export class SharedModule {}
