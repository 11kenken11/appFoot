import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe, Joueur } from '../models';
import { EquipesService } from '../services/equipes.service';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.page.html',
  styleUrls: ['./update-joueur.page.scss'],
})
export class UpdateJoueurPage implements OnInit {

  joueur = {};
  equipes;
  idE;
  idJ;
  constructor(private route: ActivatedRoute, private equipesService: EquipesService, private joueursService: JoueursService,private router: Router) { }

  ngOnInit() {
    this.idE = Number(this.route.snapshot.params['idE']);
    this.idJ = Number(this.route.snapshot.params['idJ']);
    this.equipesService.getEquipesFromServer().then(
      (equipes: Equipe[]) => {
        this.equipes = equipes;
      }
    );
    this.joueursService.getJoueur(+this.idJ).then(
      (joueur: Equipe) => {
        this.joueur = joueur; 
      }
    );
  }

  updateJoueur(form) {
    const joueurU: Joueur = 
    {
      'id': Number(form.value.id), 
      'idEquipe': Number(form.value.idEquipe),
      'nom': form.value.nom, 
      'numero': Number(form.value.numero),
      'poste': form.value.poste
    };alert("===>" + joueurU.id)
    this.joueursService.updateJoueur(joueurU);
    this.router.navigate(['/list-equipes/equipes', this.idE, 'joueurs']); 
  }

  
}
