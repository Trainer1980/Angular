import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quotes: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }
  getAllFromService(){
    this._httpService.getAll().subscribe(data =>{
      console.log(`Got all our items`, data);
      this.quotes = data;
    })
  }
}
