import { Injectable } from '@angular/core';
import { BoardStateService } from './board-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  currentPlayer: number = 1;
  playerOneName: string = '';
  playerTwoName: string = '';
  turn: number = 0;

  constructor(private boardState: BoardStateService) {}

  changeCurrentPlayer(): void {
    switch (this.currentPlayer) {
      case 1:
        this.currentPlayer = 2;
        break;
      case 2:
        this.currentPlayer = 1;
        break;
      default:
        console.log('There was an error, setting "currentPlayer" to 1');
        this.currentPlayer = 1;
        break;
    }
  }

  currentPlayerName(): string {
    return this.currentPlayer === 1 ? this.playerOneName : this.playerTwoName;
  }

  checkLine(a: number, b: number, c: number, d: number): boolean {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
    console.log('d: ', d);
    if (a === 0 || a === undefined) {
      return false;
    }
    return a === b && a === c && a === d;
  }

  checkForWin(): boolean {
    const board = this.boardState.gameBoard;

    // Check down
    for (let row = 0; row < this.boardState.rows - 3; row++) {
      for (let column = 0; column < this.boardState.columns; column++) {
        if (
          this.checkLine(
            board[row][column],
            board[row + 1][column],
            board[row + 2][column],
            board[row + 3][column]
          )
        ) {
          console.log('first');
          console.log('row, col: ', row, column);
          return true;
        }
      }
    }

    // Check right
    for (let row = 0; row < this.boardState.rows; row++) {
      for (let column = 0; column < this.boardState.columns - 3; column++) {
        if (
          this.checkLine(
            board[row][column],
            board[row][column + 1],
            board[row][column + 2],
            board[row][column + 3]
          )
        ) {
          console.log('second');
          console.log('row, col: ', row, column);

          return true;
        }
      }
    }

    // Check down-right
    for (let row = 0; row < this.boardState.rows - 3; row++) {
      for (let column = 0; column < this.boardState.columns - 3; column++) {
        if (
          this.checkLine(
            board[row][column],
            board[row + 1][column + 1],
            board[row + 2][column + 2],
            board[row + 3][column + 3]
          )
        ) {
          console.log('third');
          console.log('row, col: ', row, column);

          return true;
        }
      }
    }

    // Check down-left
    for (let row = 3; row < this.boardState.rows - 3; row++) {
      for (let column = 3; column < this.boardState.columns - 3; column++) {
        if (
          this.checkLine(
            board[row][column],
            board[row - 1][column - 1],
            board[row - 2][column - 2],
            board[row - 3][column - 3]
          )
        ) {
          console.log('fourth');
          console.log('row, col: ', row, column);

          return true;
        }
      }
    }

    // Check down-left
    for (let row = 3; row < this.boardState.rows - 3; row++) {
      for (let column = 0; column < this.boardState.columns - 3; column++) {
        if (
          this.checkLine(
            board[row][column],
            board[row - 1][column + 1],
            board[row - 2][column + 2],
            board[row - 3][column + 3]
          )
        ) {
          console.log('fourth');
          console.log('row, col: ', row, column);

          return true;
        }
      }
    }

    for (let row = 0; row < this.boardState.rows - 3; row++) {
      for (let column = 3; column < this.boardState.columns - 3; column++) {
        if (
          this.checkLine(
            board[row][column],
            board[row + 1][column - 1],
            board[row + 2][column - 2],
            board[row + 3][column - 3]
          )
        ) {
          console.log('fourth');
          console.log('row, col: ', row, column);

          return true;
        }
      }
    }
    console.log('false');
    return false;
  }

  onWin() {
    const playerName = this.currentPlayerName();
    if (playerName) {
      alert('The winner is: ' + this.currentPlayerName());
    } else {
      alert('The winner is: Player ' + this.currentPlayer);
    }
  }

  nextTurn(): void {
    this.turn++;
    if (this.turn === 42) {
      alert('The game is a DRAW.');
      return;
    }

    if (this.checkForWin()) {
      this.onWin();
      return;
    }

    this.changeCurrentPlayer();
  }
}
