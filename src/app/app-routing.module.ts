import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'login', loadChildren: () => import('./auth/components/login/login.module').then(m => m.LoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'backend-error-messages',
    loadChildren: () => import('./auth/components/backend-error-messages/backend-error-messages.module')
      .then(m => m.BackendErrorMessagesPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./profile/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
