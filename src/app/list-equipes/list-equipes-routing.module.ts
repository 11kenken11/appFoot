import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEquipesPage } from './list-equipes.page';

const routes: Routes = [
  {
    path: '',
    component: ListEquipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEquipesPageRoutingModule {}
