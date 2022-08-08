import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteringPointDetailsPageRoutingModule } from './metering-point-details-routing.module';

import { MeteringPointDetailsPage } from './metering-point-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteringPointDetailsPageRoutingModule
  ],
  declarations: [MeteringPointDetailsPage]
})
export class MeteringPointDetailsPageModule {}
