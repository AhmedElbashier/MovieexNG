import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminsudanplayDetailsComponent } from "./adminsudanplay-details.component";

const routes: Routes = [{ path: "", component: AdminsudanplayDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSudanPlayDetailsRoutingModule {}
