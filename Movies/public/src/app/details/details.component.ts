import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movieToShow: any;
  

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    this.getOneMovieFromService();
  }
  getOneMovieFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getMovieById(params['id']).subscribe(data =>{
        this.movieToShow = data;
        console.log(data);
      });
    });
  }
  
}
