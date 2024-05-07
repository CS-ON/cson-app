import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { SharedModule } from '../shared/share.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    ShoppingComponent,
  ],
  imports: [ShoppingRoutingModule, CommonModule, SharedModule, LeafletModule],
})
export class ShoppingModule {}
