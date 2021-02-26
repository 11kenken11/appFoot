import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddJoueurPageRoutingModule } from './add-joueur-routing.module';

import { AddJoueurPage } from './add-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddJoueurPageRoutingModule
  ],
  declarations: [AddJoueurPage]
})
export class AddJoueurPageModule {}
