import { Component } from '@angular/core';
import { BoardStateService } from '../board-state.service';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../game-state.service';
import { PieceComponent } from '../piece/piece.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-gameboard',
  standalone: true,
  imports: [CommonModule, PieceComponent, RouterModule],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss',
})
export class GameboardComponent {
  constructor(
    public boardState: BoardStateService,
    public gameState: GameStateService,
    private router: Router
  ) {}

  hoveredIndex: number | null = null;
  pieceBeingPlaced = false;

  async placePiece(index: number) {
    this.pieceBeingPlaced = true;
    let player = this.gameState.currentPlayer;

    const success = await this.boardState.placePiece(index, player);

    if (success) {
      this.gameState.nextTurn();
    }
    this.pieceBeingPlaced = false;
  }

  return() {
    this.boardState.clearBoard();

    this.router.navigate(['/']);
  }



}
