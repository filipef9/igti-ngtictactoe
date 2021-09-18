import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  currentPlayer: string;
  winner: string;
  board: string[][];

  ngOnInit(): void {
    this.resetMatch();
  }

  processPlay(row: number, column: number): void {
    if (this.board[row][column] === '') {
      this.board[row][column] = this.currentPlayer;
      this.currentPlayer = (this.currentPlayer === 'O') ? 'X' : 'O';
    }
  }

  resetMatch(): void {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      [ '', '', '' ],
      [ '', '', '' ],
      [ '', '', '' ],
    ];
  }

}
