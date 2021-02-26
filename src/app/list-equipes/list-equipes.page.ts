import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipe } from '../models';
import { EquipesService } from '../services/equipes.service';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.page.html',
  styleUrls: ['./list-equipes.page.scss'],
})
export class ListEquipesPage implements OnInit {

  equipes = [];

  constructor(private equipesService: EquipesService, private router: Router) { }

  ngOnInit() {
    
    this.refresh();
  }

  deleteEquipe(event, id: number) {
    this.equipesService.deleteEquipe(id);
    // on raffraichit la page pour que la liste se mette à jour
    this.refresh();

    //on empêche la redirection vers la liste des joueurs
    event.preventDefault()
    event.stopPropagation();
  }

  refresh() {
    this.equipesService.getEquipesFromServer().then(
      (equipes: Equipe[]) => {
        this.equipes = equipes;
      }
    );
  }
  

}
