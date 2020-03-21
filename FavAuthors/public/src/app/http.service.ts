import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors(){
    return this._http.get('/authors')
  }
  getAuthorById(id){
    return this._http.get('/authors/'+id);
  }
  addAuthor(newAuthor){
    return this._http.post('/authors', newAuthor)
  }
  editAuthor(id, authorToShow){
    console.log("in edit Author")
    return this._http.put('/authors/' +id, authorToShow);
  }
  deleteAuthor(id){
    return this._http.delete('authors/' +id);
  }
}