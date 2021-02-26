import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEquipesPageRoutingModule } from './list-equipes-routing.module';

import { ListEquipesPage } from './list-equipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEquipesPageRoutingModule
  ],
  declarations: [ListEquipesPage]
})
export class ListEquipesPageModule {}
