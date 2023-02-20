import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsudanmovieComponent} from './addsudanmovie.component';


const routes: Routes = [
  {
    path: '',
    component: AddsudanmovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsudanmovieRoutingModule { }
