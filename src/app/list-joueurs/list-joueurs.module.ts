import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListJoueursPageRoutingModule } from './list-joueurs-routing.module';

import { ListJoueursPage } from './list-joueurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListJoueursPageRoutingModule
  ],
  declarations: [ListJoueursPage]
})
export class ListJoueursPageModule {}
