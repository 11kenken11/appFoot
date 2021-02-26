import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipe } from './models';
import { EquipesService } from './services/equipes.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'List', url: '/list-equipes', icon: 'list' },
    { title: 'Add', url: '/add-equipe', icon: 'add-circle' }
  ];
  equipes;
  equipesSubscription: Subscription;
  //public appPages = [];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private equipesService: EquipesService) {
  }

  ngOnInit() {

      /*this.equipesService.getEquipesFromServer().then(
        (equipes: Equipe[]) => {
          this.equipes = equipes;
          this.equipes.forEach(equipe => {
            this.appPages.push({ title: equipe.name, url: '/folder/'+ equipe.id + '/' + equipe.name, icon: '/assets/mu.png' });
          });
        }
      );*/
  }
}
