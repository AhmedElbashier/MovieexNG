import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddplayComponent} from './addplay.component';


const routes: Routes = [
  {
    path: '',
    component: AddplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPlayRoutingModule { }
