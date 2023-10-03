import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './headet-footer/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PtoductComponent } from './pages/home/ptoduct/ptoduct.component';
import { FooterComponent } from './headet-footer/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhyChooseUsComponent } from './pages/why-choose-us/why-choose-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurTeamsComponent } from './pages/our-teams/our-teams.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PortofoliosComponent } from './pages/portofolios/portofolios.component';
import { PortofoliosDetailsComponent } from './pages/portofolios-details/portofolios-details.component';
import { Route ,RouterModule } from '@angular/router';
import { NotPageComponent } from './pages/not-page/not-page.component';
import { LayoutComponent } from './layout/layout.component';
import { CreativePersonComponent } from './pages/creative-person/creative-person.component';
import { ReactiveFormsModule } from '@angular/forms';


let routes:Route[]=[
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path:'home',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path:'about-us',
        component: AboutUsComponent,
        title: 'About Us'
      },
      {
        path:'services',
        component: ServicesComponent,
        title: 'Services'
      },
      {
        path:'out-teams',
        component: OurTeamsComponent,
        title: 'Our Teams'
      },
      {
        path:'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us'
      },
      {
        path:'portofolios',
        component: PortofoliosComponent,
        title: 'Portofolios Component'
      },
      {
        path:'portofolios-details',
        component: PortofoliosDetailsComponent,
        title: 'Portofolios Details'
      },
    ]
  },
  {
    path:'**',
    component: NotPageComponent,
    title: 'ERRORE'
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
