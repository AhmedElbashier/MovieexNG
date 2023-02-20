import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMoviesDetailsComponent } from './searchmovies-details.component';

const routes: Routes = [
  { path: '', component: SearchMoviesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMoviesDetailsRoutingModule { }
