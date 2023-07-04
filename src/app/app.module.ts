import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AppComponent, UsernameComponent, AlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
