import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent} from './components/aboutus/aboutus.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { LoginComponent } from './components/login/login.component';
import { TortoloComponent } from './components/tortolo/tortolo.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'nosotros', component: AboutusComponent},
  {path: 'agenda', component: ScheduleComponent},
  {path:  'login',  component: LoginComponent},
  {path:  'solicitud',  component: SolicitudComponent},
  {path:  'tortolo',  component: TortoloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
