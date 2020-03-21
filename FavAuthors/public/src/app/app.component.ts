import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Favorite Authors';

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
        console.log(params['id'])
      });
      this.goHome();
    }

    goHome() {
      this._router.navigate(['/home']);
    }
}