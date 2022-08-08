import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeterReadingsPageRoutingModule } from './meter-readings-routing.module';

import { MeterReadingsPage } from './meter-readings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeterReadingsPageRoutingModule
  ],
  declarations: [MeterReadingsPage]
})
export class MeterReadingsPageModule {}
