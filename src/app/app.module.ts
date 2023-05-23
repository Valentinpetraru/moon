import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnBlueComponent } from './buttons/btn-blue/btn-blue.component';
import { BtnBasicComponent } from './buttons/btn-basic/btn-basic.component';
import { TermsComponent } from './core/terms/terms.component';
import { FirstSectionComponent } from './homepage/components/first-section/first-section.component';
import { BannerComponent } from './core/banner/banner.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnBlueComponent,
    BtnBasicComponent,
    TermsComponent,
    NavbarComponent,
    FirstSectionComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
