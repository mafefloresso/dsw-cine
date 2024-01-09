import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFuncionPage } from './edit-funcion.page';

const routes: Routes = [
  {
    path: '',
    component: EditFuncionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFuncionPageRoutingModule {}
