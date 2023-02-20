import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SudanMovieDetailsComponent } from './sudan-movie-details.component';

const routes: Routes = [
  { path: '', component: SudanMovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudanMovieDetailsRoutingModule { }
