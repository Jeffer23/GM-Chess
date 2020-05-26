import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as Chess from 'chess.js';
declare var ChessBoard:any;

import { CapturedPieces } from '../models/capturedPieces';
import { ChessDialogComponent } from '../chess-dialog/chess-dialog.component'
import { GmWebSocketService } from '../gm-web-socket.service';
import { SESSION_ID } from '../constants/session-constant';
import { GMGame } from '../models/gmGame';
import { ChessClock } from '../models/chessClock';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board:any;
  game:any;
  pgn:string;
  capturedPieces : CapturedPieces;
  gmGame:GMGame = new GMGame();
  dialogRef;
  chessClock: ChessClock = new ChessClock(0,0,0);
  private opponentSessionId : string;
  private lastLegalMove:any = {};
  private playerColor;
  private opponentColor;
  public whiteStatus;
  public blackStatus;
  public isDrawOffered = false;
  public isGameOver = false;
  private thisObj;
  squareClass = 'square-55d63'

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog, private gmWSService: GmWebSocketService, private router:Router, private activatedRoute: ActivatedRoute) { 
    iconRegistry.addSvgIcon('shakehand',sanitizer.bypassSecurityTrustResourceUrl('assets/images/handshake.svg'));
    iconRegistry.addSvgIcon('quit',sanitizer.bypassSecurityTrustResourceUrl('assets/images/quit.svg'));
    iconRegistry.addSvgIcon('chat',sanitizer.bypassSecurityTrustResourceUrl('assets/images/chat.svg'));
    iconRegistry.addSvgIcon('blackBishop',sanitizer.bypassSecurityTrustResourceUrl('assets/images/bB.svg'));
    iconRegistry.addSvgIcon('blackKnight',sanitizer.bypassSecurityTrustResourceUrl('assets/images/bN.svg'));
    iconRegistry.addSvgIcon('blackPawn',sanitizer.bypassSecurityTrustResourceUrl('assets/images/bP.svg'));
    iconRegistry.addSvgIcon('blackQueen',sanitizer.bypassSecurityTrustResourceUrl('assets/images/bQ.svg'));
    iconRegistry.addSvgIcon('blackRook',sanitizer.bypassSecurityTrustResourceUrl('assets/images/bR.svg'));
    iconRegistry.addSvgIcon('whiteBishop',sanitizer.bypassSecurityTrustResourceUrl('assets/images/wB.svg'));
    iconRegistry.addSvgIcon('whiteKnight',sanitizer.bypassSecurityTrustResourceUrl('assets/images/wN.svg'));
    iconRegistry.addSvgIcon('whitePawn',sanitizer.bypassSecurityTrustResourceUrl('assets/images/wP.svg'));
    iconRegistry.addSvgIcon('whiteQueen',sanitizer.bypassSecurityTrustResourceUrl('assets/images/wQ.svg'));
    iconRegistry.addSvgIcon('whiteRook',sanitizer.bypassSecurityTrustResourceUrl('assets/images/wR.svg'));

    const self = this.thisObj =this;
    gmWSService.subscribe(function(event){
        self.onMessage(event);
    });
    
  }

  ngOnInit(): void {
    const self = this;
    this.game = new Chess();
    this.board = ChessBoard('chessBoard',{
      draggable: true,
      position: 'start',
      moveSpeed: 'slow',
      snapSpeed: 100,
      onDragStart: function (source, piece, position, orientation) { 
        return self.onDragStart(source, piece, position, orientation); 
      },
      onDrop: function (source, target, piece, newPos, oldPos, orientation) { 
        return self.onDrop(source, target, piece); 
      },
      onSnapEnd: function (source, target, piece) {
        self.onSnapEnd(source, target, piece); 
        
      }
    });
    this.capturedPieces = new CapturedPieces();
    var gameType;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      gameType = paramMap.get("gameType");
      console.log(gameType);
     
    });
    var message:any = {};
    message.msgType = "new game";
    message.gameType = gameType;
    message.playerId = localStorage.getItem(SESSION_ID.userId);
  
    console.log(message);
    this.gmWSService.send(message);

    this.dialogRef = this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {findOpponent : true},
        disableClose: true
      });
  }


  private onMessage(evt){
    console.log("GMGame : " + JSON.stringify(evt));
    if(this.dialogRef !=undefined){
      this.dialogRef.close();
      this.dialogRef = undefined;

      this.gmGame = JSON.parse(JSON.stringify(evt));
      var onTimeout = (wonByStr)=>{
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {reason : "Timeout", wonBy : wonByStr, isGame:true}
        });

        this.endGame();
    } 
    this.chessClock = new ChessClock(this.gmGame.initialClockTime.hours, this.gmGame.initialClockTime.minutes, this.gmGame.initialClockTime.seconds, onTimeout);
    if(this.gmGame.whitePlayer.playerId == localStorage.getItem(SESSION_ID.userId)){
      this.opponentSessionId = this.gmGame.blackPlayer.sessionId;
      this.setPlayerColor("white");
    } else if (this.gmGame.blackPlayer.playerId == localStorage.getItem(SESSION_ID.userId)){
      this.opponentSessionId = this.gmGame.whitePlayer.sessionId;
      this.setPlayerColor("black");
    }
    
  } else if(evt.move){
      //Opponent Move
      this.game.move(evt.move);
      this.thisObj.calculatePieceCapture(evt.move);

      this.chessClock.updateChessClock(evt.chessClock);

      //updating the clock of opponent move
      if(this.opponentColor == "white") {
        this.chessClock.startWhitePlay();
        this.chessClock.stop("white");
      } else if(this.opponentColor == "black") {
        this.chessClock.startBlackPlay();
        this.chessClock.stop("black");
      }

      this.thisObj.updateStatus();

      //Highlight Opponent last Move
      document.getElementsByClassName("square-" + evt.move.to)[0].classList.add("highlight-opponent-move");
      

  } else if(evt.msgType == "action"){
      if(evt.quit){
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {opponentQuit : true}
        });
        this.endGame();
      } else if(evt.offerDraw) {
        const dialogRef = this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {offerDrawFromOpponent : true},
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log("Is draw accepted : " + result);
          
          var message: any = {};
          message.msgType = "action";
          message.to = this.opponentSessionId;
          if(result == "accept"){
            message.acceptDraw = true;
            this.gmWSService.send(message);
            this.endGame();
          } else if(result == "reject"){
            message.rejectDraw = true;
            this.gmWSService.send(message);
          }
          
        });
        
      } else if(evt.acceptDraw){
        this.isDrawOffered = false;
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {acceptDraw : true}
        });
        this.endGame();
      } else if(evt.rejectDraw){
        this.isDrawOffered = false;
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {rejectDraw : true}
        });
      }
  }

  
}

  private onDragStart (source, piece, position, orientation) {
    // only allow pieces to be dragged when the board is oriented in their direction
    if ((orientation === 'white' && piece.search(/^w/) === -1) ||
        (orientation === 'black' && piece.search(/^b/) === -1)) {
      return false
    }

    if (this.game.game_over()) return false
  
    // only pick up pieces for the side to move
    if ((this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
      return false
    }
  }

  private onDrop (source, target, piece) {

      // see if the move is legal
      var move = this.game.move({
        from: source,
        to: target,
        promotion: "q"
      })
    
      // illegal move
      if (move === null) 
        return 'snapback'

      //saving last move
      this.lastLegalMove = move;

      //Updating the clock of this player
      if(this.playerColor == "white") {
        this.chessClock.startWhitePlay();
        this.chessClock.stop("white");
      } else if(this.playerColor == "black") {
        this.chessClock.startBlackPlay();
        this.chessClock.stop("black");
      }
      
      //Remove & Highlighting the moves
      var allSquares = document.getElementsByClassName("square-55d63");
      for(var i=0; i< allSquares.length; i++){
        allSquares[i].classList.remove("highlight-my-move");
        allSquares[i].classList.remove("highlight-opponent-move");
      }
      document.getElementsByClassName("square-" + move.to)[0].classList.add("highlight-my-move");
  }

  private onSnapEnd (source, target, piece:string) {

    if((piece == "wP" && source.endsWith("7") && target.endsWith("8")) || (piece == "bP" && source.endsWith("2") && target.endsWith("1"))){
      this.game.undo();
      const dialogRef = this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {promotion : true, color:piece.substring(0,1)},
        disableClose: true
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed' + result);
        //result = "n";
        var move = this.game.move({
          from: source,
          to: target,
          promotion: result
        })
        // illegal move
        if (move === null) 
          return 'snapback'
        this.thisObj.calculatePieceCapture(move);
        this.thisObj.updateStatus();

         //Sending message to oppoent
          var message:any = {};
          message.msgType = "move";
          message.to = this.opponentSessionId;
          message.move = move;
          message.chessClock = this.chessClock;
          this.gmWSService.send(message);
      });
    } else {
      this.thisObj.calculatePieceCapture(this.lastLegalMove);

       //Sending message to oppoent
       var message:any = {};
       message.msgType = "move";
       message.to = this.opponentSessionId;
       message.move = this.lastLegalMove;
       message.chessClock = this.chessClock;
       this.gmWSService.send(message);
    }
    this.thisObj.updateStatus();
  }

  /*
    1. Update the game status(Check, Checkmate, etc..)
    2. update the chessboard(fen)
    3. update the pgn
  */
  private updateStatus() {
    console.log("Updating status...");
    this.whiteStatus =  this.blackStatus = "";
    var status = ''
  
    var turn = 'white'
    if (this.game.turn() === 'b') {
      turn = 'black'
    }

    // checkmate?
    if (this.game.in_checkmate()) {
      var winningColor;
      if(turn == "white"){
        winningColor = "Black";
      } else if (turn == "black") {
        winningColor = "White";
      }
      
      this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {reason : "CheckMate", wonBy : winningColor, isGame:true}
      });
      this.endGame();
    }  else if(this.game.in_check()){
      
      if(turn == "white"){
        this.whiteStatus = "Check";
      } else if(turn == "black"){
        this.blackStatus = "Check";
      }
    } else if(this.game.in_draw() || this.game.in_threefold_repetition()){
      this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {reason : "Draw", isGame:true}
      });
      this.endGame();
    } else if(this.game.in_stalemate()){
      this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {reason : "Stalemate", isGame:true}
      });
      this.endGame();
    } else if(this.game.insufficient_material()){
      this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {reason : "Draw - Insufficient Material", isGame:true}
      });
      this.endGame();
    }
    this.board.position(this.game.fen());
    this.pgn = this.game.pgn();
  }

  public setPlayerColor(color){
    this.board.orientation(color);
    this.playerColor = color;
    if(color == "white")
      this.opponentColor = "black";
    else if(color == "black")
      this.opponentColor = "white";
  }
  
  private calculatePieceCapture(move){
    console.log(move);
    if(move.captured){
      var capturedColor = move.color == "w"? "b" : "w";
      var captured = capturedColor + move.captured;

      if(captured == "bp"){
        this.capturedPieces.bP++;
      }else if(captured == "br"){
        this.capturedPieces.bR++;
      }else if(captured == "bn"){
        this.capturedPieces.bN++;
      }else if(captured == "bb"){
        this.capturedPieces.bB++;
      }else if(captured == "bq"){
        this.capturedPieces.bQ++;
      }else if(captured == "wp"){
        this.capturedPieces.wP++;
      }else if(captured == "wr"){
        this.capturedPieces.wR++;
      }else if(captured == "wn"){
        this.capturedPieces.wN++;
      }else if(captured == "wb"){
        this.capturedPieces.wB++;
      }else if(captured == "wq"){
        this.capturedPieces.wQ++;
      }
    }
  }

  public onQuit(){
    const dialogRef = this.dialog.open(ChessDialogComponent, {
      width: '70%',
      data : {quit : true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if(result == "quit"){
        var message:any = {};
        message.msgType = "action";
        message.to = this.opponentSessionId;
        message.quit = true;
        this.gmWSService.send(message);
        this.endGame();
      }
    });
  }

  public onOfferDraw(){
    const dialogRef = this.dialog.open(ChessDialogComponent, {
      width: '70%',
      data : {offerDraw : true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if(result == "offerdraw"){
        var message:any = {};
        message.msgType = "action";
        message.to = this.opponentSessionId;
        message.offerDraw = true;
        this.gmWSService.send(message);

        this.isDrawOffered = true;
      }
    });

  }

  public onChat(){
    const dialogRef = this.dialog.open(ChessDialogComponent, {
      width: '70%',
      data : {chat : true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });

  }

  public onAnalyse(){

  }

  public onNewGame(){
    location.reload();
  }

  private endGame(){
    this.board = ChessBoard('chessBoard',{
      draggable: false,
    });
    this.board.orientation(this.playerColor);
    this.board.position(this.game.fen());
    this.chessClock.gameOverStopClock();
    this.isGameOver = true;
    this.gmWSService.close();
  }

}
