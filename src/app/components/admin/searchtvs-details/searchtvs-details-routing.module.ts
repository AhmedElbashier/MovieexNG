import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTvsDetailsComponent } from './searchtvs-details.component';

const routes: Routes = [
  { path: '', component: SearchTvsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchTvsDetailsRoutingModule { }
