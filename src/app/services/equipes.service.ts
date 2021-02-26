import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipe } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  
  equipesSubject = new Subject<any[]>();
  private equipes: Equipe[] = [];
  private equipe: Equipe;
  private url = 'http://127.0.0.1:82/equipes';

  constructor(private http: HttpClient) { }

  emitEquipesSubject() {
    this.equipesSubject.next(this.equipes.slice());
  }

  getEquipe(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.get('http://127.0.0.1:82/equipe/' + id).toPromise().then(
          (data) => {
            resolve(data.valueOf());
          }, (error) => {
            reject(error);
          }
        );
         
      }
    );


    
  }

  getEquipesFromServer() {
    return new Promise(
      (resolve, reject) => {
        this.http.get(this.url).toPromise().then(
          (data) => {
            resolve(data.valueOf());
          }, (error) => {
            reject(error);
          }
        );
         
      }
    );

    /*this.http
    .get<any[]>(this.url)
    .subscribe(
      (response) => {
        this.equipes = response;
        this.emitEquipesSubject();
      }, 
      (error) => {
        console.log('erreur chargement :  ' + error);
      }
    );*/
  }

  addEquipe(equipe) {
     this.http.post(this.url, equipe).subscribe(
       () => {
         console.log('ajouté avec succes');
       }, 
       (error) => {
         console.log("erreur: " + error);
       }
     );
  }

  updateEquipe(equipe) {
     this.http.put(this.url + '/' + equipe['id'], equipe).subscribe(
       () => {
         console.log('equipe modifiée')
       }, 
       (error) => {
        console.log('erreur : ' + error);
       }
     );
  }

  deleteEquipe(id: number) {
   this.http.delete(this.url + '/' + id).subscribe(
     () => {
      console.log('equipe supprimée');
     },
     (error) => {
       console.log('erreur : ' + error);
     }
   );
   this.emitEquipesSubject();
  }
}
