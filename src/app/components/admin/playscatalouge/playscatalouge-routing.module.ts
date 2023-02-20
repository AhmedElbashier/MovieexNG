import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaysCatalougeComponent} from './playscatalouge.component';


const routes: Routes = [
  {
    path: '',
    component: PlaysCatalougeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaysCatalougeRoutingModule { }
