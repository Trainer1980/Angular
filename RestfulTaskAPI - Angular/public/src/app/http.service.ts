import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    var id =""
    this.getTaskById(id);
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getTaskById(id){
    let tempObservable1 = this._http.get('/tasks'+id);
    tempObservable1.subscribe(data => console.log("Got one task!", data));
  }
}