import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListJoueursPage } from './list-joueurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListJoueursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListJoueursPageRoutingModule {}
