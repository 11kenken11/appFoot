import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../models';
import { EquipesService } from '../services/equipes.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.page.html',
  styleUrls: ['./update-equipe.page.scss'],
})
export class UpdateEquipePage implements OnInit {

  equipe = {};
  idE;
  constructor(private route: ActivatedRoute, private equipesService: EquipesService, private router: Router) { }

  ngOnInit() {
    this.idE = Number(this.route.snapshot.params['idE']);
    this.equipesService.getEquipe(+this.idE).then(
      (equipe: Equipe) => {
        this.equipe = equipe; console.log(equipe)
      }
    );
  }

  updateEquipe(form) {
    const name = form.value.name;console.log(name)
    const country = form.value.country;
    const equipe  = new Equipe(this.idE, name, country);
    this.equipesService.updateEquipe(equipe);
    this.router.navigate(['/list-equipes']);
  }

}
