import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter/counter.component';
import { UpComponent } from './pages/up/up.component';
import { DownComponent } from './pages/down/down.component';
import { ResetComponent } from './pages/reset/reset.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CounterComponent,
    UpComponent,
    DownComponent,
    ResetComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
