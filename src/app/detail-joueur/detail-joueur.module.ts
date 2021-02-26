import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailJoueurPageRoutingModule } from './detail-joueur-routing.module';

import { DetailJoueurPage } from './detail-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailJoueurPageRoutingModule
  ],
  declarations: [DetailJoueurPage]
})
export class DetailJoueurPageModule {}
