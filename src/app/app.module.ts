import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route ,RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http"

let routes:Route[]=[
  {
    path: '',
    loadComponent:()=>import('./layout/layout.component').then(m=>m.LayoutComponent),
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path:'home',
        loadComponent:()=>import('./pages/home/home.component').then(m=>m.HomeComponent),
        title: 'Home'
      },
      {
        path:'about-us',
        loadComponent:()=>import('./pages/about-us/about-us.component').then(m=>m.AboutUsComponent),
        title: 'About Us'
      },
      {
        path:'services',
        loadComponent:()=>import('./pages/services/services.component').then(m=>m.ServicesComponent),
        title: 'Services'
      },
      {
        path:'out-teams',
        loadComponent:()=>import('./pages/our-teams/our-teams.component').then(m=>m.OurTeamsComponent),
        title: 'Our Teams'
      },
      {
        path:'contact-us',
        loadComponent:()=>import('./pages/contact-us/contact-us.component').then(m=>m.ContactUsComponent),
        title: 'Contact Us'
      },
      {
        path:'portofolios',
        loadComponent:()=>import('./pages/portofolios/portofolios.component').then(m=>m.PortofoliosComponent),
        title: 'Portofolios Component'
      },
      {
        path:'portofolios-details',
        loadComponent:()=>import('./pages/portofolios-details/portofolios-details.component').then(m=>m.PortofoliosDetailsComponent),
        title: 'Portofolios Details'
      },
    ]
  },
  {
    path:'**',
    loadComponent:()=>import('./pages/not-page/not-page.component').then(m=>m.NotPageComponent),
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
