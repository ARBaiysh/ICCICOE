import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UsersListPageRoutingModule} from './users-list-routing.module';

import {UsersListPage} from './users-list.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UsersListPageRoutingModule,
        Ng2SearchPipeModule,
    ],
    declarations: [UsersListPage]
})
export class UsersListPageModule {
}
