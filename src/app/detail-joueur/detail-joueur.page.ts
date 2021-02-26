import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from '../models';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.page.html',
  styleUrls: ['./detail-joueur.page.scss'],
})
export class DetailJoueurPage implements OnInit {

  joueur;
  constructor(private route: ActivatedRoute, private joueursService: JoueursService) { }

  ngOnInit() {
    this.joueur = new Joueur();
    const id = this.route.snapshot.params['idJ'];
    this.joueursService.getJoueur(+id).then(
      (joueur: Joueur) => {
        this.joueur = joueur;
      }
    );
  }

}
