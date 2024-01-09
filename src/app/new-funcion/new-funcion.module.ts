import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFuncionPageRoutingModule } from './new-funcion-routing.module';

import { NewFuncionPage } from './new-funcion.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFuncionPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [NewFuncionPage]
})
export class NewFuncionPageModule {}
