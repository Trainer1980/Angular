import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Holly\'s NewsApp';
  arts:Array<any>;
  srces:Array<any>;

  constructor(private httpService: HttpService) {      
  }

  ngOnInit() {
      this.httpService.initArts().subscribe(data => this.arts = data['articles']);
      this.httpService.initSrces().subscribe(data=> this.srces = data['sources']); 
    }

  searchArts(source){
    this.httpService.getArtByID(source).subscribe(data => this.arts = data['articles']);
  }


}
