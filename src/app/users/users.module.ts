import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('user', reducers),
        EffectsModule.forFeature([
            GetCurrentUserEffect
        ]),
    ],
    providers: []
})
export class UsersModule {
}
