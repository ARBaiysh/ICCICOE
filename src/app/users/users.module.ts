import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { GetAllUsersEffect } from './store/effects/getAllUsers.effect';
import { UpdateUsersEffect } from './store/effects/updateUsers.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([
      GetCurrentUserEffect,
      GetAllUsersEffect,
      UpdateUsersEffect
    ]),
  ],
  providers: []
})
export class UsersModule {
}
