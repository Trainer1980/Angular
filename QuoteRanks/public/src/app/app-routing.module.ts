import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: AddComponent },
  { path: 'quotes/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'write/:id', component: AddQuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
