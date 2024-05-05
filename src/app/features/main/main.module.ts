import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { SharedModule } from '../shared/share.module';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';
import { RewardCardComponent } from './components/reward-card/reward-card.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RewardsCenterComponent } from './pages/rewards-center/rewards-center.component';
import { ScorePointsComponent } from './pages/score-points/score-points.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

import { MainPageComponent } from './pages/main/main-page.component';


@NgModule({
  declarations: [
    MainComponent,
    BannerPointsComponent,
    RewardCardComponent,
    ScorePointsComponent,
    MainPageComponent,
    RewardsCenterComponent,
    MainHeaderComponent,
  ],
  imports: [MainRoutingModule, CommonModule, ZXingScannerModule, SharedModule],
})
export class MainModule {}
