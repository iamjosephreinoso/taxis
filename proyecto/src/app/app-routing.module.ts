import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'taxis-disponibles',
    loadChildren: () => import('./taxis-disponibles/taxis-disponibles.module').then( m => m.TaxisDisponiblesPageModule)
  },
  {
    path: 'taxis-operacion',
    loadChildren: () => import('./taxis-operacion/taxis-operacion.module').then( m => m.TaxisOperacionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-conductor',
    loadChildren: () => import('./menu-conductor/menu-conductor.module').then( m => m.MenuConductorPageModule)
  },
  {
    path: 'menu-usuario',
    loadChildren: () => import('./menu-usuario/menu-usuario.module').then( m => m.MenuUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
