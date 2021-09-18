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
    if (this.board[row][column] === '' && this.winner === '') {
      this.board[row][column] = this.currentPlayer;
      if (this.isWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
        this.currentPlayer = '';
      } else {
        this.currentPlayer = (this.currentPlayer === 'O') ? 'X' : 'O';
      }
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

  private isWinner(player: string): boolean {
    return this.checkRows(player) || this.checkColumns(player) || this.checkDiagonals(player); 
  }

  private checkRows(player: string): boolean {
    for (let row = 0; row < this.board.length; row++) {
      if (
        this.board[row][0] === player &&
        this.board[row][1] === player &&
        this.board[row][2] === player
      ) {
        return true;
      }
    }
    return false;
  }

  private checkColumns(player: string): boolean {
    for (let column = 0; column < this.board.length; column++) {
      if (
        this.board[0][column] === player &&
        this.board[1][column] === player &&
        this.board[2][column] === player
      ) {
        return true;
      }
    }
    return false;
  }

  private checkDiagonals(player: string): boolean {
    if (
        this.board[0][0] === player &&
        this.board[1][1] === player &&
        this.board[2][2] === player
    ) {
      return true;
    }

    if (
        this.board[0][2] === player &&
        this.board[1][1] === player &&
        this.board[2][0] === player
    ) {
      return true;
    }

    return false;
  }

}
