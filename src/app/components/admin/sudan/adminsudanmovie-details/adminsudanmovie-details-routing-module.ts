import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminsudanmovieDetailsComponent } from "./adminsudanmovie-details.component";

const routes: Routes = [{ path: "", component: AdminsudanmovieDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSudanMovieDetailsRoutingModule {}
