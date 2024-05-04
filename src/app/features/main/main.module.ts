import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

const pages = [];

@NgModule({
  declarations: [MainComponent, NavbarComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
