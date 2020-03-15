import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getCakes(){
    return this._http.get('/cakes')
  }
  getCakeById(id){
    return this._http.get('/cakes/'+id);
  }
  addCake(newCake){
    return this._http.post('/cakes', newCake)
  }
  editCake(id, newRating){
    console.log("in edit cake")
    return this._http.put('/cakes/' +id, newRating);
  }
}
