import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteringPointListPage } from './metering-point-list.page';

const routes: Routes = [
  {
    path: '',
    component: MeteringPointListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteringPointListPageRoutingModule {}
