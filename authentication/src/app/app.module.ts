import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {RouterOutlet} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    CommonModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
