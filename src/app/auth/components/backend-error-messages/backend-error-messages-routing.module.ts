import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackendErrorMessagesPage } from './backend-error-messages.page';

const routes: Routes = [
  {
    path: '',
    component: BackendErrorMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendErrorMessagesPageRoutingModule {}
