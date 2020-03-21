import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'
  tasks: object;
  show_task: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    
    this.getTaskFromService(id);
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
    });
  }
  getTaskFromService(id){
    let observable1 = this._httpService.getTaskById(id);
    observable1.subscribe(data => {
      console.log("Got one task!", data);
      this.show_task = data;
    });
  }
}