import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { PSubscriberPageModule } from '../p-subscriber/p-subscriber.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule,
        PSubscriberPageModule
    ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
