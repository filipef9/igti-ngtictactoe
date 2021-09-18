import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {

  currentPlayer: string;
  winner: string;
  board: string[][];

  constructor() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      [ '', '', '' ],
      [ '', '', '' ],
      [ '', '', '' ],
    ];
  }

  processPlay(row: number, column: number): void {
    this.board[row][column] = this.currentPlayer;
    this.currentPlayer = (this.currentPlayer === 'O') ? 'X' : 'O';
  }

}
