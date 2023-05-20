import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BtnBlueComponent } from './buttons/btn-blue/btn-blue.component';
import { BtnBasicComponent } from './buttons/btn-basic/btn-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BtnBlueComponent,
    BtnBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
