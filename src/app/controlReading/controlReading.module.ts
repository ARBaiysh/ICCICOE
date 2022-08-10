import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {GetControlReadingListEffect} from './store/effects/getControlReadingList.effect';
import {CreateControlReadingEffect} from './store/effects/createControlReading.effect';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('controlReading', reducers),
        EffectsModule.forFeature([
            GetControlReadingListEffect,
            CreateControlReadingEffect
        ]),
    ]
})
export class ControlReadingModule {
}
