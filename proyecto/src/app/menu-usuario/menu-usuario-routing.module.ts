import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuUsuarioPage } from './menu-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: MenuUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuUsuarioPageRoutingModule {}
