import { Injectable } from '@angular/core';
import { AuthenticateService } from './core/services/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient, private authenticateService : AuthenticateService) { }
   GetWeatherForecast() : Observable<any> {
    // Create an instance of HttpHeaders to set request headers
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticateService.jwtToken});
    //let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    // Define your request options with the headers
    const requestOptions = {
      headers: headers,
      // Other options if needed, e.g., observe, responseType, etc.
    };
    // Use HttpClient to make the request
    return this.http.get<any>("https://localhost:44329/api/Display/GetWeatherForecast", requestOptions);
  }
}
