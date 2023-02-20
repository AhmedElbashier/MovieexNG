import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTvsComponent } from './searchtvs.component';


const routes: Routes = [
  {
    path: '',
    component: SearchTvsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchTvsRoutingModule { }
