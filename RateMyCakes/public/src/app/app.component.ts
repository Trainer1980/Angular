import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes: any;
  newCake: any;
  createdCake: any;
  cakeToShow: any;
  cakeToEdit: any;
  editedCake: any;
  newRating = {rating: "", comment: ""}
  avg: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newCake = {baker: "", image: ""};
    this.getCakesFromService();
    this.newRating = {rating: "5", comment: ""};
  }
  getCakesFromService(){
    this._httpService.getCakes().subscribe(data => {
      console.log(`Got our cakes!`, data);
      this.cakes = data;
    });
  }
  onClickFetchOneCake(id) {
    console.log(`click event2 is working with num param: ${id}`)
    this.getCakeFromService(id).subscribe(data =>{
      this.cakeToShow = data
      console.log(data)
      this.average()
    });
    
  }
  getCakeFromService(id){
    return this._httpService.getCakeById(id);
  }
  onSubmitCreate(){
    this._httpService.addCake(this.newCake).subscribe(data => {
      console.log(`Got data from post back`, data);
      this.createdCake = data
      this.newCake = {baker: "", image: ""}
      this.getCakesFromService();
    })
  }
  onSubmitEdit(id) {
    console.log(`edit event`)
    this._httpService.editCake(id, this.newRating).subscribe(data => {
      console.log(`edit event post data: ${id}`, data)
      this.editedCake = data
      this.getCakesFromService();
      this.newRating = {rating: "5", comment: ""};
    })
  }
  average(){
    var sum = 0;
    if(this.cakeToShow.reviews.length == 0){
      return this.avg = 0;
    }
    for(var i = 0; i < this.cakeToShow.reviews.length; i++){
      sum += this.cakeToShow.reviews[i].rating;
    }
    this.avg = sum/this.cakeToShow.reviews.length;
  }
}