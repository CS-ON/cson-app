import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BusinessCardComponent } from './business-card/business-card.component';

@NgModule({
  declarations: [NavbarComponent, BusinessCardComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, BusinessCardComponent],
})
export class SharedModule {}
