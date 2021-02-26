import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEquipePageRoutingModule } from './update-equipe-routing.module';

import { UpdateEquipePage } from './update-equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEquipePageRoutingModule
  ],
  declarations: [UpdateEquipePage]
})
export class UpdateEquipePageModule {}
