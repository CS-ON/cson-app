import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexedDBModule } from './indexed-db.module';
import { SharedModule } from './features/shared/share.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IndexedDBModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
