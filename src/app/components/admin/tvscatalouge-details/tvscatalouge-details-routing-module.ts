import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvscatalougeDetailsComponent } from './tvscatalouge-details.component';

const routes: Routes = [
  { path: '', component: TvscatalougeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvsCatalougeDetailsRoutingModule { }
