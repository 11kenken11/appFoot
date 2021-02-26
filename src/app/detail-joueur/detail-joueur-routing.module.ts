import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailJoueurPage } from './detail-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailJoueurPageRoutingModule {}
