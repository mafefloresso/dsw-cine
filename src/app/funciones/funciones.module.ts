import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionesPageRoutingModule } from './funciones-routing.module';

import { FuncionesPage } from './funciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionesPageRoutingModule
  ],
  declarations: [FuncionesPage]
})
export class FuncionesPageModule {}
