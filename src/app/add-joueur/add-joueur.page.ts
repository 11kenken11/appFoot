import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipe, Joueur } from '../models';
import { EquipesService } from '../services/equipes.service';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.page.html',
  styleUrls: ['./add-joueur.page.scss'],
})
export class AddJoueurPage implements OnInit {

  equipes;
  idE;

  constructor(private equipesService: EquipesService, private joueursService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idE = this.route.snapshot.params['idE'];
    this.equipesService.getEquipesFromServer().then(
      (equipes: Equipe[]) => {
        this.equipes = equipes;
      }
    );

  
  }

  addJoueur(form) {
    const joueur: Joueur = 
    {
      'id': Number(form.value.id), 
      'idEquipe': Number(form.value.idEquipe),
      'nom': form.value.nom, 
      'numero': Number(form.value.numero),
      'poste': form.value.poste
    };

    this.joueursService.addJoueur(joueur);
    this.router.navigate(['/equipes', joueur.idEquipe, 'joueurs']); 
  }

}
