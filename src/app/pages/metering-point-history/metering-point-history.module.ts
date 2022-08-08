import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteringPointHistoryPageRoutingModule } from './metering-point-history-routing.module';

import { MeteringPointHistoryPage } from './metering-point-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteringPointHistoryPageRoutingModule
  ],
  declarations: [MeteringPointHistoryPage]
})
export class MeteringPointHistoryPageModule {}
