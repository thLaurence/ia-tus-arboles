import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarArbolPage } from './registrar-arbol.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarArbolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarArbolPageRoutingModule {}
