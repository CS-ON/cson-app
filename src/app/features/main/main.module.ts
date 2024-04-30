import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';


const pages = []

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [MainRoutingModule, CommonModule ]
})
export class MainModule { }
