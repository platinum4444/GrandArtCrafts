import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { PaintingComponent } from './painting/painting.component';
import { PaintingsComponent } from './paintings/paintings.component';

import { PrivacyComponent } from './privacy/privacy.component';
import { CookieComponent } from './cookie/cookie.component';
import { PrivacyPoComponent } from './privacy-po/privacy-po.component';
import {GoogleAnalyticsService} from './google-analytics.service';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurStoryComponent,
    ContactComponent,
    BlogComponent,
    PaintingComponent,
    PaintingsComponent,
    FAQComponent,
    PrivacyComponent,
    CookieComponent,
    PrivacyPoComponent
  ],
  imports: [

    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    GoogleTagManagerModule.forRoot({
      id: 'N6D4XK3',
    }),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})



export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
