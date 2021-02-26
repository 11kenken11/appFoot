import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/:idE/:name',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/:idE/:name/add',
    loadChildren: () => import('./add-joueur/add-joueur.module').then( m => m.AddJoueurPageModule)
  },
  {
    path: 'folder/:idE/:name/joueur/:idJ',
    loadChildren: () => import('./detail-joueur/detail-joueur.module').then( m => m.DetailJoueurPageModule)
  },
  {
    path: 'folder/:idE/:name/joueur/:idJ/update',
    loadChildren: () => import('./update-joueur/update-joueur.module').then( m => m.UpdateJoueurPageModule)
  },
  {
    path: 'list-equipes',
    loadChildren: () => import('./list-equipes/list-equipes.module').then( m => m.ListEquipesPageModule)
  },
  {
    path: 'list-equipes/:idE/update-equipe',
    loadChildren: () => import('./update-equipe/update-equipe.module').then( m => m.UpdateEquipePageModule)
  },
  {
    path: 'list-equipes/add',
    loadChildren: () => import('./add-equipe/add-equipe.module').then( m => m.AddEquipePageModule)
  },
  {
    path: 'equipes/:idE/joueurs',
    loadChildren: () => import('./list-joueurs/list-joueurs.module').then( m => m.ListJoueursPageModule)
  },
  {
    path: 'equipes/:idE/joueurs/:idJ/update',
    loadChildren: () => import('./update-joueur/update-joueur.module').then( m => m.UpdateJoueurPageModule)
  },
  {
    path: 'list-equipes/equipes/:idE/joueurs',
    loadChildren: () => import('./list-joueurs/list-joueurs.module').then( m => m.ListJoueursPageModule)
  },
  {
    path: 'list-equipes/equipes/:idE/joueurs/add',
    loadChildren: () => import('./add-joueur/add-joueur.module').then( m => m.AddJoueurPageModule)
  },
  {
    path: 'detail-joueur',
    loadChildren: () => import('./detail-joueur/detail-joueur.module').then( m => m.DetailJoueurPageModule)
  },
  {
    path: 'joueurs/:idJ',
    loadChildren: () => import('./detail-joueur/detail-joueur.module').then( m => m.DetailJoueurPageModule)
  },
  {
    path: 'update-joueur',
    loadChildren: () => import('./update-joueur/update-joueur.module').then( m => m.UpdateJoueurPageModule)
  },
  {
    path: 'add-joueur',
    loadChildren: () => import('./add-joueur/add-joueur.module').then( m => m.AddJoueurPageModule)
  },
  {
    path: 'add-equipe',
    loadChildren: () => import('./add-equipe/add-equipe.module').then( m => m.AddEquipePageModule)
  },
  {
    path: 'update-equipe',
    loadChildren: () => import('./update-equipe/update-equipe.module').then( m => m.UpdateEquipePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
