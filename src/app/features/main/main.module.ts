import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

const pages = [];

@NgModule({
  declarations: [MainComponent, NavbarComponent, BusinessCardComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
