import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SudanPlayDetailsComponent } from './sudan-play-details.component';

const routes: Routes = [
  { path: '', component: SudanPlayDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudanPlayDetailsRoutingModule { }
