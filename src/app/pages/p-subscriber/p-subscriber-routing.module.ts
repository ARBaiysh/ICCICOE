import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PSubscriberPage } from './p-subscriber.page';

const routes: Routes = [
  {
    path: '',
    component: PSubscriberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PSubscriberPageRoutingModule {}
