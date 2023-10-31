import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)},
    {path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)},
    {path: 'user-edit', loadChildren: () => import('./pages/user-edit/user-edit.module').then(m => m.UserEditPageModule)},
    {path: 'p-subscriber', loadChildren: () => import('./pages/p-subscriber/p-subscriber.module').then(m => m.PSubscriberPageModule)},
    {
        path: 'metering-point-list',
        loadChildren: () => import('./pages/metering-point-list/metering-point-list.module').then(m => m.MeteringPointListPageModule)
    },
    {
        path: 'metering-point-details',
        loadChildren: () => import('./pages/metering-point-details/metering-point-details.module').then(m => m.MeteringPointDetailsPageModule)
    },
    {
        path: 'meter-readings',
        loadChildren: () => import('./pages/meter-readings/meter-readings.module').then(m => m.MeterReadingsPageModule)
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
