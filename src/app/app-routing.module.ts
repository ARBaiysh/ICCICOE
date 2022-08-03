import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)},
    {path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)},
    {path: 'user-edit', loadChildren: () => import('./pages/user-edit/user-edit.module').then(m => m.UserEditPageModule)},  {
    path: 'p-subscriber',
    loadChildren: () => import('./pages/p-subscriber/p-subscriber.module').then( m => m.PSubscriberPageModule)
  },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
