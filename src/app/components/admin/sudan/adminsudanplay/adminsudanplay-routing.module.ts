import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsudanplayComponent } from './adminsudanplay.component';


const routes: Routes = [
  {
    path: '',
    component: AdminsudanplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSudanPlayRoutingModule { }
