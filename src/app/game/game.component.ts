import { Component, OnInit } from '@angular/core';
import * as Chess from 'chess.js';
declare var ChessBoard:any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board:any;
  game:any;
  status: string;
  pgn:string;

  constructor() { }

  ngOnInit(): void {
    const self = this;
    this.game = new Chess();
   this.board = ChessBoard('chessBoard',{
      draggable: true,
      position: 'start',
      onDragStart: function (source, piece, position, orientation) { 
        return self.onDragStart(source, piece, position, orientation); 
      },
      onDrop: function (source, target, piece, newPos, oldPos, orientation) { 
        return self.onDrop(source, target); 
      },
      onSnapEnd: function (source, target, piece) { 
        self.onSnapEnd(); 
      }
    });
    this.updateStatus;
  }

  private onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    //this.game = new Chess();
    //console.log(this.board);

    if (this.game.game_over()) return false
  
    // only pick up pieces for the side to move
    if ((this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
      return false
    }
  }

  private onDrop (source, target) {
    // see if the move is legal
    var move = this.game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })
  
    // illegal move
    if (move === null) 
      return 'snapback'
    this.updateStatus;
  }

  private onSnapEnd () {
    this.board.position(this.game.fen())
    //console.log(this.board);
  }

  private updateStatus() {
    var status = ''
  
    var moveColor = 'White'
    if (this.game.turn() === 'b') {
      moveColor = 'Black'
    }
  
    // checkmate?
    if (this.game.in_checkmate()) {
      status = 'Game over, ' + moveColor + ' is in checkmate.'
    }
  
    // draw?
    else if (this.game.in_draw()) {
      status = 'Game over, drawn position'
    }
  
    // game still on
    else {
      status = moveColor + ' to move'
  
      // check?
      if (this.game.in_check()) {
        status += ', ' + moveColor + ' is in check'
      }
    }
  
    this.status = status;
    this.pgn = this.game.pgn();
  }

}
