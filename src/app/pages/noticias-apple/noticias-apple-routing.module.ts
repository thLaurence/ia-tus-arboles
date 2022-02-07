import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasApplePage } from './noticias-apple.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasApplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasApplePageRoutingModule {}
