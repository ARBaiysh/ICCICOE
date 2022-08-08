import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterReadingsPage } from './meter-readings.page';

const routes: Routes = [
  {
    path: '',
    component: MeterReadingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeterReadingsPageRoutingModule {}
