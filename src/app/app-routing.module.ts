import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//Firebase
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio2',
    loadChildren: () => import('./pages/inicio2/inicio2.module').then( m => m.Inicio2PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'introduccion',
    loadChildren: () => import('./pages/introduccion/introduccion.module').then( m => m.IntroduccionPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'mis-arboles',
    loadChildren: () => import('./pages/mis-arboles/mis-arboles.module').then( m => m.MisArbolesPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'noticias-apple',
    loadChildren: () => import('./pages/noticias-apple/noticias-apple.module').then( m => m.NoticiasApplePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'registrar-arbol',
    loadChildren: () => import('./pages/registrar-arbol/registrar-arbol.module').then( m => m.RegistrarArbolPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule), canActivate: [NologinGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
