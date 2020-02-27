import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { LoginComponent } from './components/login/login.component';
import { TortoloComponent } from './components/tortolo/tortolo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ScheduleComponent,
    SolicitudComponent,
    LoginComponent,
    TortoloComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
