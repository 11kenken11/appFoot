import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEquipePageRoutingModule } from './add-equipe-routing.module';

import { AddEquipePage } from './add-equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEquipePageRoutingModule
  ],
  declarations: [AddEquipePage]
})
export class AddEquipePageModule {}
