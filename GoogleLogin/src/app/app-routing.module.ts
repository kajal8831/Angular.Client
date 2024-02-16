import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { SsohomeComponent } from './ssohome/ssohome.component';

const routes: Routes = [
  {path: 'weather',component: WeatherForecastComponent},
  {path: 'ssohomepage',component: SsohomeComponent},
  {path:'**', redirectTo: 'ssohomepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
