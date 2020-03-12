import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getTasks(){
    return this._http.get('/tasks')
  }
  getTaskById(id){
    return this._http.get('/tasks/'+id);
  }
  addTask(newTask){
    return this._http.post('/tasks', newTask)
  }
  editTask(id, taskToEdit){
    console.log("in edit task")
    return this._http.put('/tasks/' +id, taskToEdit);
  }
  deleteTask(id){
    return this._http.delete('/tasks/'+id);
  }

}