import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MenuComponent } from '../menu/menu.component';
import { MainComponent } from './main.component';
import { BannerPointsComponent } from './components/banner-points/banner-points.component';

@NgModule({
  declarations: [MenuComponent, MainComponent, NavbarComponent, BannerPointsComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
