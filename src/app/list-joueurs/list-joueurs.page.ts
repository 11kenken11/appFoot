import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Joueur } from '../models';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.page.html',
  styleUrls: ['./list-joueurs.page.scss'],
})
export class ListJoueursPage implements OnInit {
  idE;
  joueurs: Joueur[] = [];

  constructor(private joueursService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idE = this.route.snapshot.params['idE'];
    this.refresh();
  }

  showJoueur(joueur: Joueur) {
    this.router.navigate(['/joueurs/'+joueur.id]);
  }

  onUpdateJoueur(event, id: number) {
    this.router.navigate(['equipes', this.idE,'joueurs', id, 'update']); 
    event.preventDefault()
    event.stopPropagation();
  }

  deleteJoueur(event, id: number) {
    this.joueursService.deleteJoueur(id);
    // on raffraichit la page pour que la liste se mette à jour
    this.refresh();

    //on empêche la redirection vers la liste des joueurs
    event.preventDefault()
    event.stopPropagation();
  }

  refresh() {
    this.joueursService.getJoueursFromServer(this.idE).then(
      (joueurs: Joueur[]) => {
        this.joueurs = joueurs;
      }
    );
  }


}
