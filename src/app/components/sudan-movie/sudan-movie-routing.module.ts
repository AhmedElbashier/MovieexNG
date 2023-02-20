import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudanMovieComponent } from './sudan-movie.component';


const routes: Routes = [
  {
    path: '',
    component: SudanMovieComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudanMovieRoutingModule { }
