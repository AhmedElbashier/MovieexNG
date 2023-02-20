import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviescatalougeDetailsComponent } from './moviescatalouge-details.component';

const routes: Routes = [
  { path: '', component: MoviescatalougeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesCatalougeDetailsRoutingModule { }
