import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCatalougeComponent} from './MoviesCatalouge.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesCatalougeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesCatalougeRoutingModule { }
