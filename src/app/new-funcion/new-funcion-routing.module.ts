import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFuncionPage } from './new-funcion.page';

const routes: Routes = [
  {
    path: '',
    component: NewFuncionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewFuncionPageRoutingModule {}
