import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsudantvComponent } from './adminsudantv.component';


const routes: Routes = [
  {
    path: '',
    component: AdminsudantvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSudanTvRoutingModule { }
