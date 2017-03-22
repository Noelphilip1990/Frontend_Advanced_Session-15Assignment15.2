import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';
import { ContactComponent } from './app.contactComponent';
import { ServiceComponent } from './app.serviceComponent';
const route:Routes =[
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },	
{ path: 'contact', component: ContactComponent },
{ path: 'service', component: ServiceComponent },
{ path: '**', component: HomeComponent },
]

export const routing= RouterModule.forRoot(route);