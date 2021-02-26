import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../models';
import { EquipesService } from '../services/equipes.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.page.html',
  styleUrls: ['./add-equipe.page.scss'],
})
export class AddEquipePage implements OnInit {

  constructor(private equipesService: EquipesService, private router: Router) { }

  ngOnInit() {
  }

  addEquipe(form) {
    const equipe: Equipe = {'id': Number(form.value.id), 'name': form.value.name, 'country': form.value.country};
    this.equipesService.addEquipe(equipe);
    this.router.navigate(['/list-equipes']);
  }

}
