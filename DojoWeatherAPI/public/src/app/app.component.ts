import { Component,  OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dojo Weather Forecast';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
  }
}
