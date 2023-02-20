import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudanTvComponent } from './sudan-tv.component';


const routes: Routes = [
  {
    path: '',
    component: SudanTvComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudanTvRoutingModule { }
