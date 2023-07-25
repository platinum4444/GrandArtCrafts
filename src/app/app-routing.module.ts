import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PaintingComponent } from './painting/painting.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyPoComponent } from './privacy-po/privacy-po.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'paintbynumbers', component: PaintingsComponent },
  { path: 'paintbynumbers/:name', component: PaintingComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'privacy-pol', component: PrivacyPoComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' }),
  ],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
