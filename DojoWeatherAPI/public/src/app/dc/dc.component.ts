import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit {
  weatherData:any = {};

  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.getDc();
  }
  
  getDc() {
    let observable = this.httpService.getWeather('Washington DC., US');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }
}
