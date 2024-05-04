import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RewardCardComponent } from './components/reward-card/reward-card.component';
import { StatsCarruselComponent } from './components/stats-carrusel/stats-carrusel.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ScorePointsComponent } from './pages/score-points/score-points.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    BannerPointsComponent,
    RewardCardComponent,
    BusinessCardComponent,
    ScorePointsComponent,
    StatsCarruselComponent
  ],
  imports: [MainRoutingModule, CommonModule, ZXingScannerModule],
})
export class MainModule {}
