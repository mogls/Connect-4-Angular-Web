import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GameStateService } from '../game-state.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, public gameState: GameStateService) {}

  play(p1: string, p2: string) {
    this.gameState.playerOneName = p1;
    this.gameState.playerTwoName = p2;

    this.router.navigate(['/play']);
  }
}
