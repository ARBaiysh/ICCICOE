import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeterReadingsPageRoutingModule } from './meter-readings-routing.module';

import { MeterReadingsPage } from './meter-readings.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MeterReadingsPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [MeterReadingsPage]
})
export class MeterReadingsPageModule {}
