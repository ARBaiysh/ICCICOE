import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteringPointDetailsPage } from './metering-point-details.page';

const routes: Routes = [
  {
    path: '',
    component: MeteringPointDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteringPointDetailsPageRoutingModule {}
