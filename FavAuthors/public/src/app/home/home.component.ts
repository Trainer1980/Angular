import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authors: any;
  authorToShow: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe(data => {
      console.log(`Got our authors!`, data);
      this.authors = data;
    });
  }
  onClickDeleteAuthor(id) {
    this._httpService.deleteAuthor(id).subscribe(data => {
      console.log(`delete event is working with param: ${id}`, data)
      this.getAuthorsFromService();
    })
  }
}
