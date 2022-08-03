import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PSubscriberPageRoutingModule } from './p-subscriber-routing.module';

import { PSubscriberPage } from './p-subscriber.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PSubscriberPageRoutingModule
    ],
    exports: [
        PSubscriberPage
    ],
    declarations: [PSubscriberPage]
})
export class PSubscriberPageModule {}
