import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MenuComponent } from '../menu/menu.component';
import { MainComponent } from './main.component';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';
import { ScorePointsComponent } from './pages/score-points/score-points.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [MenuComponent, MainComponent, NavbarComponent, BannerPointsComponent, ScorePointsComponent],
  imports: [MainRoutingModule, CommonModule, ZXingScannerModule],
})
export class MainModule {}
