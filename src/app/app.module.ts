import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.Routes';
import { AppComponent } from './app.component';

//Routes
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';
import { ContactComponent } from './app.contactComponent';
import { ServiceComponent } from './app.serviceComponent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   