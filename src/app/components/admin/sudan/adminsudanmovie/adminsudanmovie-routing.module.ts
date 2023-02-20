import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsudanmovieComponent } from './adminsudanmovie.component';


const routes: Routes = [
  {
    path: '',
    component: AdminsudanmovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSudanMovieRoutingModule { }
