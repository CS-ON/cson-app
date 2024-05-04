import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { SharedModule } from '../shared/share.module';

@NgModule({
  declarations: [
    BusinessComponent,
  ],
  imports: [BusinessRoutingModule, CommonModule, SharedModule],
})
export class BusinessModule {}
