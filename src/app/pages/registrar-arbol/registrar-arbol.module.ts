import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarArbolPageRoutingModule } from './registrar-arbol-routing.module';

import { RegistrarArbolPage } from './registrar-arbol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarArbolPageRoutingModule
  ],
  declarations: [RegistrarArbolPage]
})
export class RegistrarArbolPageModule {}
