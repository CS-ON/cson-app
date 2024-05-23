import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { SharedModule } from '../shared/share.module';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RewardsCenterComponent } from './pages/rewards-center/rewards-center.component';
import { ScorePointsComponent } from './pages/score-points/score-points.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

import { MainPageComponent } from './pages/main/main-page.component';
import { ObtainPointsComponent } from './pages/obtain-points/obtain-points.component';


@NgModule({
  declarations: [
    MainComponent,
    BannerPointsComponent,
    ScorePointsComponent,
    MainPageComponent,
    RewardsCenterComponent,
    MainHeaderComponent,
    ObtainPointsComponent,
  ],
  imports: [MainRoutingModule, CommonModule, ZXingScannerModule, SharedModule],
})
export class MainModule {}
