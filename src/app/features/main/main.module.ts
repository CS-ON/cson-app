import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent, NavbarComponent, BannerPointsComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
