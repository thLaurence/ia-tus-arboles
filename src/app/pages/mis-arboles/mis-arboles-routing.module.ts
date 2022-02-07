import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisArbolesPage } from './mis-arboles.page';

const routes: Routes = [
  {
    path: '',
    component: MisArbolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisArbolesPageRoutingModule {}
