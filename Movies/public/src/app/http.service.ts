import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getMovies(){
    return this._http.get('/items')
  }
  getMovieById(id){
    return this._http.get('/items/'+id);
  }
  addMovie(obj){
    return this._http.post('/items', obj)
  };
  editMovie(id, movieToEdit){
    console.log("in edit movie")
    return this._http.put('/items/' +id, movieToEdit);
  }
  deleteMovie(id){
    return this._http.delete('/items/'+id);
  }
}