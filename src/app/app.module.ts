import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage-angular';
import {AuthInterceptor} from './auth/services/authinterceptor.service';
import {PersistenceService} from './auth/services/persistance.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {Base1cModule} from './base1c/base1c.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        AuthModule,
        UsersModule,
        Base1cModule
    ],
    providers: [PersistenceService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
