import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvsCatalougeComponent} from './TvsCatalouge.component';


const routes: Routes = [
  {
    path: '',
    component: TvsCatalougeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvsCatalougeRoutingModule { }
