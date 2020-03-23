import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newOne: any;
  createdOne: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    this.newOne = {name: ""}
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  onSubmitCreate(){
    this._httpService.createOne(this.newOne).subscribe(data => {
      console.log(`Got data from post back`, data);
      this.createdOne = data
      this.goHome();
    })
  }
}
