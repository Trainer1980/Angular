import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  movieToEdit: any;
  newReview = {name: "", rating: "", content: ""}
  editedMovie: any;
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
        this.movieToEdit = data;
        console.log(data);
      });
    });
  }
  createReview(){
    console.log(`edit event`)
    this._route.params.subscribe((params) =>{
      this._httpService.editMovie(params['id'], this.newReview).subscribe(data => {
        console.log(`edit event post data: ${params.id}`, data)
        this.editedMovie = data
        this.getOneMovieFromService();
        this.newReview = {name: "", rating: "", content: ""};
      })
    })
  }
}
