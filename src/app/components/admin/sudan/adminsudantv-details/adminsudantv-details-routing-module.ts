import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminsudantvDetailsComponent } from "./adminsudantv-details.component";

const routes: Routes = [{ path: "", component: AdminsudantvDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSudanTvDetailsRoutingModule {}
