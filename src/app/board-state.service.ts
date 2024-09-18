import { Injectable } from '@angular/core';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class BoardStateService {
  rows = 6;
  columns = 7;
  gameBoard: number[][] = [];

  constructor() {
    for (let column: number = 0; column < this.columns; column++) {
      this.gameBoard[column] = [];
      for (let row = 0; row < this.rows; row++) {
        this.gameBoard[column][row] = 0;
      }
    }
  }

  flipGameBoard(): number[][] {
    let gameBoardCopy: number[][] = this.gameBoard;
    let displayBoard: number[][] = [];
    for (let column = 0; column < this.columns; column++) {
      displayBoard[column] = gameBoardCopy[column].reverse();
    }

    return displayBoard;
  }

  async placePiece(column: number, player: number): Promise<boolean> {
    const row: number = this.gameBoard[column].indexOf(0);
  
    if (row == -1) {
      alert("You can't place a Piece there. It's out of the board!")
      return false;
    }
  
    for (let i = 5; i >= row; i--) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          this.gameBoard[column][i] = player;
          if (i < 5) {
            this.gameBoard[column][i + 1] = 0;
          }
          resolve();
        }, 90);
      });
    }
  
  
    return true;
  }
  

  clearBoard() {
    for (let column = 0; column < this.columns; column++) {
      for (let row = 0; row < this.rows; row++) {
        this.gameBoard[column][row] = 0;
      }
    }
  }

}
