import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newMovie = {title: ""};
  newReview = {name: "", rating: "", content: ""};
  createdMovie: any;
  obj: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newMovie = {title: ""};
    this.newReview = {name: "", rating: "", content: ""};
    this.obj = {movie: Object, reviews: Object}
  }
  goHome() {
    this._router.navigate(['/movies']);
  }
  onSubmit(){
    this.obj = {movie: this.newMovie, reviews: this.newReview}
    this._httpService.addMovie(this.obj).subscribe(data => {
      console.log(`Got data from post back`, data);
      this.createdMovie = data
      this.goHome();
    })
  }
}
