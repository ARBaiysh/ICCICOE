import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteringPointHistoryPage } from './metering-point-history.page';

const routes: Routes = [
  {
    path: '',
    component: MeteringPointHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteringPointHistoryPageRoutingModule {}
