import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {
  weathers : any[];
  showList : boolean;
  authorized : any;
  constructor(private weatherService : WeatherService){}

  GetWeatherForecast(){
    this.weatherService.GetWeatherForecast()
    .subscribe(response => {
      if(response!=null){
        this.showList = true;
        console.log(response);
        this.weathers = response;
      }
    },(error) => {
        // Handle errors
        this.authorized = 1;
        console.error(error);
      });
  }
}
