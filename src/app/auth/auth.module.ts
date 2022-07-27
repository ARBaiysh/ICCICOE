import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffect} from './store/effects/login.effect';
import {LogoutEffect} from './store/effects/logout.effect';
import {RegisterEffect} from './store/effects/regiser.effect';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([
            LoginEffect,
            LogoutEffect,
            RegisterEffect
        ]),
    ],
    declarations: [],
})
export class AuthModule {
}
