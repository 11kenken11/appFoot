import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Joueur } from '../models';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  joueurs: Joueur[] = [];
  equipeName: string;
  joueursSubscription: Subscription;

  constructor(private joueursService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.folder = this.route.snapshot.paramMap.get('id');

    this.equipeName = this.route.snapshot.params['name'];
    const idE = this.route.snapshot.params['idE'];
    /*this.joueursService.getJoueursFromServer(idE);
      this.joueursSubscription = this.joueursService.joueursSubject.subscribe(
        (joueurs: any[]) => {console.log(joueurs)
          this.joueurs = joueurs;
        }
      );*/

      this.joueursService.getJoueursFromServer(idE).then(
        (joueurs: Joueur[]) => {
          this.joueurs = joueurs;
        }
      )
      //this.joueursService.emitJoueursSubject();
  }

  showJoueur(joueur: Joueur) {
    this.router.navigate(['/joueurs/'+joueur.id]);
  }

}
/*
joueurs: Joueur[] = [];
  joueursSubscription: Subscription;

  constructor(private joueursService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const idE = this.route.snapshot.params['idE'];
    this.joueursService.getJoueursFromServer(idE);
      this.joueursSubscription = this.joueursService.joueursSubject.subscribe(
        (joueurs: any[]) => {console.log(joueurs)
          this.joueurs = joueurs;
        }
      );
      this.joueursService.emitJoueursSubject();
  }

  showJoueur(joueur: Joueur) {
    this.router.navigate(['/joueurs/'+joueur.id]);
  }
*/