import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks'
  tasks: any;
  taskToShow: any;
  newTask: any;
  createdTask: any;
  taskToEdit: any;
  editedTask: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.getTasksFromService();
    //this.getTaskFromService();
    //this.onClickFetchTasks();
  }
  onClickFetchTasks() {
    console.log(`click event`);
    this.getTasksFromService();
  }
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      console.log(`Got our tasks!`, data);
      this.tasks = data;
    });
  }
  onClickFetchOneTask(id) {
    console.log(`click event2 is working with num param: ${id}`)
    this.getTaskFromService(id).subscribe(data =>{
      this.taskToShow = data
      console.log(data)
    })
  }
  getTaskFromService(id){
    return this._httpService.getTaskById(id);
  }
  onClickEditTask(id){
    console.log(`initiate edit event`)
    this.getTaskFromService(id).subscribe(data =>{
      this.taskToEdit = data
      console.log(this.taskToEdit)
    })
  }
  onSubmit(){
    this._httpService.addTask(this.newTask).subscribe(data => {
      console.log(`Got data from post back`, data);
      this.createdTask = data
      this.newTask = {title: "", description: ""}
      this.getTasksFromService();
    })
  }
  onSubmitEdit(id) {
    console.log(`edit event`)
    this._httpService.editTask(id, this.taskToEdit).subscribe(data => {
      console.log(`edit event post data: ${id}`, data)
      this.editedTask = data
      this.getTasksFromService();
      this.taskToEdit = null;
    })
  }
  onClickDeleteTask(id) {
    this._httpService.deleteTask(id).subscribe(data => {
      console.log(`delete event is working with param: ${id}`, data)
      this.getTasksFromService();
      this.taskToEdit = null;
    })
  }
}