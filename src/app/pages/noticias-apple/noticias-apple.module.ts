import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasApplePageRoutingModule } from './noticias-apple-routing.module';

import { NoticiasApplePage } from './noticias-apple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasApplePageRoutingModule
  ],
  declarations: [NoticiasApplePage]
})
export class NoticiasApplePageModule {}
