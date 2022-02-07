import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisArbolesPageRoutingModule } from './mis-arboles-routing.module';

import { MisArbolesPage } from './mis-arboles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisArbolesPageRoutingModule
  ],
  declarations: [MisArbolesPage]
})
export class MisArbolesPageModule {}
