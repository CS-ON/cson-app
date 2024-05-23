import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RewardDetailRoutingModule } from './reward-detail-routing.module';
import { RewardDetailComponent } from './reward-detail.component';
import { SharedModule } from '../shared/share.module';
import { RewardClaimComponent } from './pages/reward-claim/reward-claim.component';

@NgModule({
  declarations: [RewardDetailComponent, RewardClaimComponent],
  imports: [RewardDetailRoutingModule, CommonModule, SharedModule],
})
export class RewardDetailModule {}
