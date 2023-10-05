import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route ,RouterModule } from '@angular/router';


let routes:Route[]=[
  {
    path: '',
    // component:LayoutComponent,
    loadComponent:()=>import('./layout/layout.component').then(m=>m.LayoutComponent),
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path:'home',
        // component: HomeComponent,
        loadComponent:()=>import('./pages/home/home.component').then(m=>m.HomeComponent),
        title: 'Home'
      },
      {
        path:'about-us',
        // component: AboutUsComponent,
        loadComponent:()=>import('./pages/about-us/about-us.component').then(m=>m.AboutUsComponent),
        title: 'About Us'
      },
      {
        path:'services',
        // component: ServicesComponent,
        loadComponent:()=>import('./pages/services/services.component').then(m=>m.ServicesComponent),
        title: 'Services'
      },
      {
        path:'out-teams',
        // component: OurTeamsComponent,
        loadComponent:()=>import('./pages/our-teams/our-teams.component').then(m=>m.OurTeamsComponent),
        title: 'Our Teams'
      },
      {
        path:'contact-us',
        // component: ContactUsComponent,
        loadComponent:()=>import('./pages/contact-us/contact-us.component').then(m=>m.ContactUsComponent),
        title: 'Contact Us'
      },
      {
        path:'portofolios',
        // component: PortofoliosComponent,
        loadComponent:()=>import('./pages/portofolios/portofolios.component').then(m=>m.PortofoliosComponent),
        title: 'Portofolios Component'
      },
      {
        path:'portofolios-details',
        // component: PortofoliosDetailsComponent,
        loadComponent:()=>import('./pages/portofolios-details/portofolios-details.component').then(m=>m.PortofoliosDetailsComponent),
        title: 'Portofolios Details'
      },
    ]
  },
  {
    path:'**',
    // component: NotPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
