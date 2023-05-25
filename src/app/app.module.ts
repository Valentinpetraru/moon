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
import { PayCardComponent } from './cards/pay-card/pay-card.component';
import { CasestudyComponent } from './homepage/components/casestudy/casestudy.component';
import { BusinessModelComponent } from './homepage/components/business-model/business-model.component';
import { CardCollageComponent } from './homepage/components/business-model/components/card-collage/card-collage.component';
@NgModule({
  declarations: [
    AppComponent,
    BtnBlueComponent,
    BtnBasicComponent,
    TermsComponent,
    NavbarComponent,
    FirstSectionComponent,
    BannerComponent,
    FooterComponent,
    PayCardComponent,
    CasestudyComponent,
    BusinessModelComponent,
    CardCollageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
