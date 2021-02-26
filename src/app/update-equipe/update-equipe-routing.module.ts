import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEquipePage } from './update-equipe.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEquipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEquipePageRoutingModule {}
