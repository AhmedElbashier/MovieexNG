import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsudanplayComponent} from './addsudanplay.component';


const routes: Routes = [
  {
    path: '',
    component: AddsudanplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsudanPlayRoutingModule { }
