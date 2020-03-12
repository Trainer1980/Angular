import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'
  tasks: any;
  taskToShow: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    //this.getTasksFromService();
    //this.getTaskFromService();
    //this.onClickFetchTasks();
  }
  onClickFetchTasks(): void{
    console.log(`click event`);
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(`Got our tasks!`, data);
      this.tasks = data;
    });
  }
  onClickFetchOneTask(id): void{
    console.log(`click event2 is working with num param: ${id}`)
    this.getTaskFromService(id).subscribe(data =>{
      this.taskToShow = data
      console.log(data)
    })
  }
  getTaskFromService(id){
    return this._httpService.getTaskById(id);
  }
}