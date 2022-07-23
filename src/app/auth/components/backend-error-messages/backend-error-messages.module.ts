import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackendErrorMessagesPageRoutingModule } from './backend-error-messages-routing.module';

import { BackendErrorMessagesPage } from './backend-error-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackendErrorMessagesPageRoutingModule
  ],
  exports: [BackendErrorMessagesPage],
  declarations: [BackendErrorMessagesPage]
})
export class BackendErrorMessagesPageModule {
}
