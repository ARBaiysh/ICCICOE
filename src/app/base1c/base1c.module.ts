import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GetAllBase1cEffect } from './store/effects/getAllBase1c.effect';
import { reducers } from './store/reducers';
import { GetPSubscribersEffect } from './store/effects/getPSubscribers.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('base1c', reducers),
    EffectsModule.forFeature([
      GetAllBase1cEffect,
      GetPSubscribersEffect
    ]),
  ]
})
export class Base1cModule {
}
