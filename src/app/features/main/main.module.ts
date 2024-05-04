import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarruselCardComponent } from './components/carrusel-card/carrusel-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

const pages = [];

@NgModule({
  declarations: [MainComponent, NavbarComponent, CarruselCardComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
