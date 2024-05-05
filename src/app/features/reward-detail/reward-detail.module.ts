import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RewardDetailRoutingModule } from './reward-detail-routing.module';
import { RewardDetailComponent } from './reward-detail.component';
import { SharedModule } from '../shared/share.module';

@NgModule({
  declarations: [
    RewardDetailComponent,
  ],
  imports: [RewardDetailRoutingModule, CommonModule, SharedModule],
})
export class RewardDetailModule {}
