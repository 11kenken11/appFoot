import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateJoueurPageRoutingModule } from './update-joueur-routing.module';

import { UpdateJoueurPage } from './update-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateJoueurPageRoutingModule
  ],
  declarations: [UpdateJoueurPage]
})
export class UpdateJoueurPageModule {}
