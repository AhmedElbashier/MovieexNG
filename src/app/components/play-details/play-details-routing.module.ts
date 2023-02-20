import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayDetailsComponent } from './play-details.component';

const routes: Routes = [
  { path: '', component: PlayDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayDetailsRoutingModule { }
