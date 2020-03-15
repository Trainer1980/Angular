import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiKey = 'bccb891aecce10203a734abc9147ee9f';

  constructor(private http: HttpClient) { }

  getWeather(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=imperial' + '&APPID='+this.apiKey);
  }
}
