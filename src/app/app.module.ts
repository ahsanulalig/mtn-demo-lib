import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MtnLibModule } from 'mtn-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MtnLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
