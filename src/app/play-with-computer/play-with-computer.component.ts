import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChessDialogComponent } from '../chess-dialog/chess-dialog.component';
import { CapturedPieces } from '../models/capturedPieces';
import { ChessClock } from '../models/chessClock';
import * as Chess from 'chess.js';
declare var ChessBoard:any;
declare var Stockfish:any;

@Component({
  selector: 'app-play-with-computer',
  templateUrl: './play-with-computer.component.html',
  styleUrls: ['./play-with-computer.component.css']
})
export class PlayWithComputerComponent implements OnInit {
  isMobileScreen;
  board:any;
  game:any;
  status: string;
  pgn:string;
  engine;
  evaler;
  engineStatus: EngineStatus;
  displayScore:boolean;
  time:Time;
  computerColor: string;
  playerColor :  string;
  isEngineRunning:boolean;
  announced_game_over;
  //computerThinking : boolean;
  computerStatus : string;
  playerStatus : string;
  private chessClock: ChessClock;
  public whiteTime:string;
  public blackTime:string;
  public onTimeout : any;
  public capturedPieces : CapturedPieces;

  constructor(private dialog:MatDialog, public breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.isMobileScreen =  breakpointObserver.isMatched('(max-width: 1200px)');
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
   }

  ngOnInit(): void {
    const self = this;
    this.engine = new Worker("assets/js/stockfish.js");
    this.evaler = new Worker("assets/js/stockfish.js");
    this.engineStatus = new EngineStatus();
    this.game = new Chess();//'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3'
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
    this.setPlayerColor('white');
    self.displayStatus;
    self.uciCmd('uci');

    self.evaler.onmessage = function evalerOnmessage(event) {
      return self.evalerOnmessage(event);
    }
    
    
    self.engine.onmessage = function engineOnmessage(event) {
      return self.engineOnmessage(event);
    }
   
    this.displayScore = false;
    this.time = new Time();
    this.isEngineRunning = false;
    this.chessClock = new ChessClock(0,10,0, this.onTimeout);
    this.capturedPieces = new CapturedPieces();

    this.onTimeout = (wonByStr)=>{
      this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {reason : "Timeout", wonBy : wonByStr, isGame:true}
      });

      this.board = ChessBoard('chessBoard',{
        draggable: false
      });

      this.board.position(this.game.fen());
    }

    setInterval(()=>{
      /* Time Interval to update the clock during play*/
      this.whiteTime = this.chessClock.whiteClock.getTime();
      this.blackTime = this.chessClock.blackClock.getTime();
    }, 1000);

    self.start();
  }

  private onDragStart (source, piece, position, orientation) {
    var re = this.playerColor == 'white' ? /^b/ : /^w/
        if (this.game.game_over() ||
            piece.search(re) !== -1) {
            return false;
        }
  };

  private uciCmd(cmd, which?:any) {
    console.log("UCI: " + cmd);
    
    (which || this.engine).postMessage(cmd);
  }

  private displayStatus() {
    var status = 'Engine: ';
    if(!this.engineStatus.engineLoaded) {
        status += 'loading...';
    } else if(!this.engineStatus.engineReady) {
        status += 'loaded...';
    } else {
        status += 'ready.';
    }
    
    if(this.engineStatus.search) {
        status += '<br>' +this.engineStatus.search;
        if(this.engineStatus.score && this.displayScore) {
            status += (this.engineStatus.score.substr(0, 4) === "Mate" ? " " : ' Score: ') + this.engineStatus.score;
        }
    }
  }

  private get_moves()
    {
        var moves = '';
        var history = this.game.history({verbose: true});
        this.capturedPieces = new CapturedPieces();
        for(var i = 0; i < history.length; ++i) {
            var move = history[i];
            this.calculatePieceCapture(move);
            moves += ' ' + move.from + move.to + (move.promotion ? move.promotion : '');
        }

        return moves;
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

    private prepareMove() {
      this.playerStatus = "";
      this.computerStatus = "";
      this.pgn = this.game.pgn();
      this.board.position(this.game.fen());
      var turn = this.game.turn() == 'w' ? 'white' : 'black';
      if(!this.game.game_over()) {
          if(turn != this.playerColor) {
              this.uciCmd('position startpos moves' + this.get_moves());
              this.uciCmd('position startpos moves' + this.get_moves(), this.evaler);
              this.uciCmd("eval", this.evaler);
              
              if (this.time && this.chessClock) {
                  this.uciCmd("go " + (this.time.depth ? "depth " + this.time.depth : "") + " wtime " + this.chessClock.whiteClock.getMilliSeconds() + " winc " + 0 + " btime " + this.chessClock.blackClock.getMilliSeconds() + " binc " + 0);
              } else {
                this.uciCmd("go " + (this.time.depth ? "depth " + this.time.depth : ""));
              }
              this.isEngineRunning = true;
          }
      } if(this.game.in_checkmate()){
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
      } else if(this.game.in_check()){
        if(turn == this.playerColor){
          this.playerStatus = "Check";
        } else if(turn == this.computerColor){
          this.computerStatus = "Check";
        }
      } else if(this.game.in_draw() || this.game.in_threefold_repetition()){
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {reason : "Draw", isGame:true}
        });
      } else if(this.game.in_stalemate()){
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {reason : "Stalemate", isGame:true}
        });
      } else if(this.game.insufficient_material()){
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {reason : "Draw - Insufficient Material", isGame:true}
        });
      }
  }

  private evalerOnmessage(event) {
    var line;
    
    if (event && typeof event === "object") {
        line = event.data;
    } else {
        line = event;
    }
    
    console.log("evaler: " + line);
    
    /// Ignore some output.
    if (line === "uciok" || line === "readyok" || line.substr(0, 11) === "option name") {
        return;
    }
  }

  private engineOnmessage(event) {
    var line;
    
    if (event && typeof event === "object") {
        line = event.data;
    } else {
        line = event;
    }
    console.log("Reply: " + line)
    if(line == 'uciok') {
        this.engineStatus.engineLoaded = true;
    } else if(line == 'readyok') {
      this.engineStatus.engineReady = true;
    } else {
        var match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);
        /// Did the AI move?
        if(match) {
          this.isEngineRunning = false;
          this.game.move({from: match[1], to: match[2], promotion: match[3]});
          this.prepareMove();
          this.uciCmd("eval",  this.evaler);
          this.stopPlayer2Clock();
          this.get_moves();
            //uciCmd("eval");
        /// Is it sending feedback?
        } else if(match = line.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/)) {
          this.engineStatus.search = 'Depth: ' + match[1] + ' Nps: ' + match[2];
        }
        
        /// Is it sending feed back with a score?
        if(match = line.match(/^info .*\bscore (\w+) (-?\d+)/)) {
            var score = parseInt(match[2]) * ( this.game.turn() == 'w' ? 1 : -1);
            /// Is it measuring in centipawns?
            if(match[1] == 'cp') {
              this.engineStatus.score = (score / 100.0).toFixed(2);
            /// Did it find a mate?
            } else if(match[1] == 'mate') {
              this.engineStatus.score = 'Mate in ' + Math.abs(score);
            }
            
            /// Is the score bounded?
            if(match = line.match(/\b(upper|lower)bound\b/)) {
              this.engineStatus.score = ((match[1] == 'upper') == ( this.game.turn() == 'w') ? '<= ' : '>= ') +  this.engineStatus.score
            }
        }
    }
    this.displayStatus;
  };

  private onDrop (source, target) {
    // see if the move is legal
    var move = this.game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return 'snapback';

    this.prepareMove();
    this.stopPlayer1Clock();
  };

  private onSnapEnd() {
    this.board.position(this.game.fen());
  };  

  public reset(){
    this.uciCmd('setoption name Contempt value 0');
    //uciCmd('setoption name Skill Level value 20');
    this.setSkillLevel(20);
    this.uciCmd('setoption name King Safety value 0'); /// Agressive 100 (it's now symetric)
  }

  public loadpgn(pgn){
    this.game.load_pgn(pgn);
  }

  public setPlayerColor(color){
    this.playerColor = color;
    this.board.orientation(this.playerColor);

    if(color == "white")
      this.computerColor = "black";
    else if(color == "black")
      this.computerColor = "white";
  }

  public setSkillLevel(skill){
    var max_err, err_prob, difficulty_slider;
            
            if (skill < 0) {
                skill = 0;
            }
            if (skill > 20) {
                skill = 20;
            }
            
            this.time.level = skill;
            
            /// Change thinking depth allowance.
            if (skill < 5) {
                this.time.depth = "1";
            } else if (skill < 10) {
                this.time.depth = "2";
            } else if (skill < 15) {
                this.time.depth = "3";
            } else {
                /// Let the engine decide.
                this.time.depth = "";
            }
            
            this.uciCmd('setoption name Skill Level value ' + skill);
            
            ///NOTE: Stockfish level 20 does not make errors (intentially), so these numbers have no effect on level 20.
            /// Level 0 starts at 1
            err_prob = Math.round((skill * 6.35) + 1);
            /// Level 0 starts at 10
            max_err = Math.round((skill * -0.5) + 10);
            
            this.uciCmd('setoption name Skill Level Maximum Error value ' + max_err);
            this.uciCmd('setoption name Skill Level Probability value ' + err_prob);
  }


  public setDepth(depth){
    this.time = new Time();
    this.time.depth = depth;
  }

  public setNodes(nodes){
    this.time = new Time();
    this.time.nodes = nodes;
  }

  public setContempt(contempt){
    this.uciCmd('setoption name Contempt value ' + contempt);
  }

  public setAggressiveness(value){
    this.uciCmd('setoption name Aggressiveness value ' + value);
  }

  public setDisplayScore(flag){
    this.displayScore = flag;
    this.displayStatus();
  }

  public start(){
    this.uciCmd('ucinewgame');
    this.uciCmd('isready');
    this.engineStatus.engineReady = false;
    this.engineStatus.search = null;
    this.displayStatus();
    this.setSkillLevel(14);
    this.prepareMove();
    this.announced_game_over = false;
  }

  public undo(){
    if(this.isEngineRunning)
                return false;
    this.game.undo();
    this.game.undo();
    this.engineStatus.search = null;
    this.displayStatus();
    this.prepareMove();
    this.get_moves();
    return true;
  }

  public newGame(){
    this.ngOnInit();
  }

  public switchColor(){
    if(!this.isEngineRunning){
      this.stopPlayer1Clock();
      if(this.playerColor == "white") {
        this.setPlayerColor("black");
      }
      else if(this.playerColor == "black") {
        this.setPlayerColor("white");
      }
      this.start();
    } else {
      console.log("Let the Computer Stop Thinking");
    }
    
  }

  private stopPlayer1Clock(){
    this.chessClock.startWhitePlay();
    this.chessClock.stop("white");
  }

  private stopPlayer2Clock(){
    this.chessClock.startBlackPlay();
    this.chessClock.stop("black");
  }

}

class EngineStatus{
  public engineReady: boolean;
  public engineLoaded : boolean;
  public search : string;
  public score : string;
}

class Time {
  public depth : string;
  public nodes : string;
  public level : number;

}