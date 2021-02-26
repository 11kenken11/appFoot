import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateJoueurPage } from './update-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateJoueurPageRoutingModule {}
