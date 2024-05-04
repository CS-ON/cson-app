import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MenuComponent, MainComponent, NavbarComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
