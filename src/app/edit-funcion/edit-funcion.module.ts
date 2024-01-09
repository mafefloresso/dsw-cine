import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFuncionPageRoutingModule } from './edit-funcion-routing.module';

import { EditFuncionPage } from './edit-funcion.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFuncionPageRoutingModule, 
    ReactiveFormsModule,
  ],
  declarations: [EditFuncionPage]
})
export class EditFuncionPageModule {}
