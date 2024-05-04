import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [MenuComponent, MainComponent],
  imports: [MainRoutingModule, CommonModule],
})
export class MainModule {}
