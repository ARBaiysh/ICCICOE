import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {BackendErrorMessagesPageModule} from '../backend-error-messages/backend-error-messages.module';
import {SidenavPageModule} from '../sidenav/sidenav.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ReactiveFormsModule,
        BackendErrorMessagesPageModule,
        SidenavPageModule,
    ],
    declarations: [LoginPage],
})
export class LoginPageModule {
}
