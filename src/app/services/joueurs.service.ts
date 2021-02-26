import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Joueur } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  joueursSubject = new Subject<any[]>();
  private joueurs: Joueur[] = [];
  private url = 'http://127.0.0.1:82/joueurs';

  constructor(private http: HttpClient) { }

  emitJoueursSubject() {
    this.joueursSubject.next(this.joueurs.slice());
  }

  getJoueursFromServer(idE: number) {

    return new Promise(
      (resolve, reject) => {
        this.http.get<any[]>('http://127.0.0.1:82/equipes/'+ idE + '/joueurs').toPromise().then(
          (response) => {
            resolve(response.valueOf());
            this.emitJoueursSubject();
          }, (error) => {
            console.log("erreur : " + error);
          }
        )
      }
    )
  }

  getJoueur(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.get('http://127.0.0.1:82/joueurs/' + id).toPromise().then(
          (data) => {
            resolve(data.valueOf());
          }, (error) => {
            reject(error);
          }
        );
         
      }
    );
    
  }

  addJoueur(joueur) {
    this.http.post(this.url, joueur).subscribe(
      () => {
        console.log('ajouté avec succes');
      }, 
      (error) => {
        console.log("erreur: " + error);
      }
    );
 }

 deleteJoueur(id:number) {
  this.http.delete(this.url + '/' + id).subscribe(
    () => {
     console.log('joueur supprimée');
    },
    (error) => {
      console.log('erreur : ' + error);
    }
  );
 }

 updateJoueur(joueur) {alert(joueur.nom)
  this.http.put(this.url + '/' + joueur['id'], joueur).subscribe(
    () => {
      console.log('joueur modifiée')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
 }

}
