import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';
import { RewardCardComponent } from './components/reward-card/reward-card.component';
import { ScorePointsComponent } from './pages/score-points/score-points.component';
import { RewardsCenterComponent } from './pages/rewards-center/rewards-center.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    BannerPointsComponent,
    RewardCardComponent,
    BusinessCardComponent,
    ScorePointsComponent,
    RewardsCenterComponent
  ],
  imports: [MainRoutingModule, CommonModule, ZXingScannerModule],
})
export class MainModule {}
