import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_key = 'c529ac76b8e34382ada6ec3a8c1e6d83';

  constructor(private http:HttpClient) { }
  initSrces(){
    return this.http.get('https://newsapi.org/v2/sources?country=us&language=en&apiKey='+this.api_key);
  }
  initArts(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey='+this.api_key);
  }
  getArtByID(source: String){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
