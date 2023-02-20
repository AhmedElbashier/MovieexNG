import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsudantvComponent} from './addsudantv.component';


const routes: Routes = [
  {
    path: '',
    component: AddsudantvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsudantvRoutingModule { }
