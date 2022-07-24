import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../auth/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from '../auth/store/effects/login.effect';
import { BackendErrorMessagesPageModule } from '../auth/components/backend-error-messages/backend-error-messages.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      LoginEffect
    ]),
    ReactiveFormsModule,
    BackendErrorMessagesPageModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {
}