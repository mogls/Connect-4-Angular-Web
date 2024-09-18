import { Routes } from '@angular/router';
import { GameboardComponent } from './gameboard/gameboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Connect-4',
  },
  {
    path: 'play',
    component: GameboardComponent,
    title: 'gameBoard',
  },
];
