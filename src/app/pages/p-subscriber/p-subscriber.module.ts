import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PSubscriberPageRoutingModule } from './p-subscriber-routing.module';

import { PSubscriberPage } from './p-subscriber.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PSubscriberPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    PSubscriberPage
  ],
  declarations: [PSubscriberPage]
})
export class PSubscriberPageModule {
}
