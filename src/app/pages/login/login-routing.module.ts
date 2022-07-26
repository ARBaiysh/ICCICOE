import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {path: '', component: LoginPage},
  {path: 'sidenav', loadChildren: () => import('../sidenav/sidenav.module').then(m => m.SidenavPageModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {
}
