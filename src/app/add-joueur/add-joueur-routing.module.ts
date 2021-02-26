import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJoueurPage } from './add-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: AddJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddJoueurPageRoutingModule {}
