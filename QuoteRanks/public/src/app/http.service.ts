import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll(){
    return this._http.get('/items')
  }
  getOneById(id){
    return this._http.get('/items/' +id)
  }
  createOne(newOne){
    return this._http.post('/items', newOne)
  }
  editOne(id, oneToEdit){
    return this._http.put('/items/' +id, oneToEdit)
  }
  deleteOne(id){
    return this._http.delete('/items/' +id)
  }
}
