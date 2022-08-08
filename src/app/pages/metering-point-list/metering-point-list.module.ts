import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteringPointListPageRoutingModule } from './metering-point-list-routing.module';

import { MeteringPointListPage } from './metering-point-list.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MeteringPointListPageRoutingModule,
        Ng2SearchPipeModule
    ],
  declarations: [MeteringPointListPage]
})
export class MeteringPointListPageModule {}
