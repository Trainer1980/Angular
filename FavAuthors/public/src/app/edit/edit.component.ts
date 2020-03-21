import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  authorToShow: any;
  editedAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    this.getAuthorFromService();
  }
  getAuthorFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getAuthorById(params['id']).subscribe(data =>{
        this.authorToShow = data;
        console.log(data);
      });
    });
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  onSubmitEdit(id) {
    console.log(`edit event`)
    this._route.params.subscribe((params)=>{
      this._httpService.editAuthor(params['id'], this.authorToShow).subscribe(data =>{
      console.log(`edit event post data: ${id}`, data)
      this.editedAuthor = data
      this.goHome();
      })
    })
  }
}
