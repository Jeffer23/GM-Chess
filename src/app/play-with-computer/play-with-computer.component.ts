import { Component, OnInit } from '@angular/core';
import * as Chess from 'chess.js';
declare var ChessBoard:any;
declare var Stockfish:any;

@Component({
  selector: 'app-play-with-computer',
  templateUrl: './play-with-computer.component.html',
  styleUrls: ['./play-with-computer.component.css']
})
export class PlayWithComputerComponent implements OnInit {
  board:any;
  game:any;
  status: string;
  pgn:string;
  engine;
  evaler;
  engineStatus: EngineStatus;
  displayScore:boolean;
  time:Time;
  playerColor;
  clockTimeoutID;
  isEngineRunning:boolean;
  announced_game_over;
  computerThinking : boolean;
  private chessClock: ChessClock;
  public whiteTime:string;
  public blackTime:string;

  constructor() {
    this.engine = new Worker("/assets/js/stockfish.js");
    this.evaler = new Worker("/assets/js/stockfish.js");
    this.displayScore = false;
    this.time = new Time();
    this.playerColor = "white";
    this.clockTimeoutID = null;
    this.isEngineRunning = false;
    this.computerThinking = false;
    this.chessClock = new ChessClock(0,15,0);

    setInterval(()=>{
      /* Time Interval to update the clock during play*/
      this.whiteTime = this.chessClock.whiteClock.getTime();
      this.blackTime = this.chessClock.blackClock.getTime();
    }, 1000);
   }

  ngOnInit(): void {
    const self = this;
    this.engineStatus = new EngineStatus();
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
    self.displayStatus;
    self.uciCmd('uci');

    self.evaler.onmessage = function evalerOnmessage(event) {
      return self.evalerOnmessage(event);
    }
    
    
    self.engine.onmessage = function engineOnmessage(event) {
      return self.engineOnmessage(event);
    }
   

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

  /*private displayClock(color, t) {
    var isRunning = false;
    if(this.time.startTime > 0 && color == this.time.clockColor) {
        t = Math.max(0, t + this.time.startTime - Date.now());
        isRunning = true;
    }
    var id = color == this.playerColor ? '#time2' : '#time1';
    var sec = Math.ceil(t / 1000);
    var min = Math.floor(sec / 60);
    sec -= min * 60;
    var hours = Math.floor(min / 60);
    min -= hours * 60;
    var display = hours + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
    if(isRunning) {
        display += sec & 1 ? ' <--' : ' <-';
    }
    //$(id).text(display);
    //TODO::

    console.log("Display : " + display);
  }*/

  /*private updateClock() {
    this.displayClock('white', this.time.wtime);
    this.displayClock('black', this.time.btime);
  }*/

  /*private clockTick() {
    this.updateClock;
    var t = (this.time.clockColor == 'white' ? this.time.wtime : this.time.btime) + this.time.startTime - Date.now();
    var timeToNextSecond = (t % 1000) + 1;
  }*/

  /*private stopClock() {
    if(this.clockTimeoutID !== null) {
        clearTimeout(this.clockTimeoutID);
        this.clockTimeoutID = null;
    }
    if(this.time.startTime > 0) {
        var elapsed = Date.now() - this.time.startTime;
        this.time.startTime = null;
        if(this.time.clockColor == 'white') {
            this.time.wtime = Math.max(0, this.time.wtime - elapsed);
        } else {
            this.time.btime = Math.max(0, this.time.btime - elapsed);
        }
    }
  }*/

  /*private startClock() {
    if(this.game.turn() == 'w') {
        this.time.wtime += this.time.winc;
        this.time.clockColor = 'white';
    } else {
        this.time.btime += this.time.binc;
        this.time.clockColor = 'black';
    }
    this.time.startTime = Date.now();
    this.clockTick();
  }*/

  private get_moves()
    {
        var moves = '';
        var history = this.game.history({verbose: true});
        
        for(var i = 0; i < history.length; ++i) {
            var move = history[i];
            moves += ' ' + move.from + move.to + (move.promotion ? move.promotion : '');
        }
        
        return moves;
    }

    private prepareMove() {
     // this.stopClock();
      this.pgn = this.game.pgn();
      this.board.position(this.game.fen());
      //this.updateClock;
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
    this.computerThinking = true;
    var line;
    
    if (event && typeof event === "object") {
        line = event.data;
    } else {
        line = event;
    }
    console.log("Reply: " + line)
    if(line == 'uciok') {
        this.engineStatus.engineLoaded = true;
        this.computerThinking = false;
    } else if(line == 'readyok') {
      this.engineStatus.engineReady = true;
      this.computerThinking = false;
    } else {
        var match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);
        /// Did the AI move?
        if(match) {
          this.isEngineRunning = false;
          this.game.move({from: match[1], to: match[2], promotion: match[3]});
          this.prepareMove();
          this.uciCmd("eval",  this.evaler);
          this.computerThinking = false;
          this.stopBlackClock();
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
    this.stopWhiteClock();
  };

  private onSnapEnd() {
    this.board.position(this.game.fen());
  };  

  public reset(){
    this.uciCmd('setoption name Contempt value 0');
    //uciCmd('setoption name Skill Level value 20');
    this.setSkillLevel(0);
    this.uciCmd('setoption name King Safety value 0'); /// Agressive 100 (it's now symetric)
  }

  public loadpgn(pgn){
    this.game.load_pgn(pgn);
  }

  public setPlayerColor(color){
    this.playerColor = color;
    this.board.orientation(this.playerColor);
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
    this.prepareMove();
    this.announced_game_over = false;
    this.computerThinking = false;
  }

  public undo(){
    if(this.isEngineRunning)
                return false;
    this.game.undo();
    this.game.undo();
    this.engineStatus.search = null;
    this.displayStatus();
    this.prepareMove();
    return true;
  }

  public newGame(){
    this.ngOnInit();
  }

  private stopWhiteClock(){
    this.chessClock.startWhitePlay();
    this.chessClock.stop("white");
    this.whiteTime = this.chessClock.whiteClock.getTime();
  }

  private stopBlackClock(){
    this.chessClock.startBlackPlay();
    this.chessClock.stop("black");
    this.blackTime = this.chessClock.blackClock.getTime();
  }
}

class EngineStatus{
  public engineReady: boolean;
  public engineLoaded : boolean;
  public search : string;
  public score : string;
}

class Time {
  public  startTime: number;
  public clockColor : string;
  public wtime : number;
  public btime : number;
  public winc : number;
  public binc : number;
  public depth : string;
  public nodes : string;
  public level : number;

}

class Clock{
  public hours: number;
  public minutes : number;
  public seconds : number;
  private timeoutId:any;

  constructor(hours:number, minutes:number, seconds:number){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public start(){
    this.timeoutId = setInterval(()=>{
     if(--this.seconds <= 0){
        if(--this.minutes < 0){
          if(--this.hours < 0){
            console.log("Game Over");
          } else {
            this.minutes = 59;
            this.seconds = 60;
          }
        } else {
          this.seconds = 60;
        }
      }
    }, 1000);
  }

  public stop(){
    if(this.timeoutId)
      clearTimeout(this.timeoutId);
  }

  public getTime(){
    var hours:string;
    var minutes:string;
    var seconds:string;

    if(this.hours !=undefined && this.hours.toString().length == 1){
      hours = "0" + this.hours;
    } else if(this.hours !=undefined && this.hours.toString().length == 2){
      hours = this.hours.toString();
    }

    if(this.minutes !=undefined && this.minutes.toString().length==1){
      minutes = "0" + this.minutes;
    } else if(this.minutes !=undefined && this.minutes.toString().length == 2){
      minutes = this.minutes.toString();
    }

    if(this.seconds !=undefined && this.seconds.toString().length==1){
      seconds = "0" + this.seconds;
    } else if(this.seconds !=undefined && this.seconds.toString().length == 2){
      seconds = this.seconds.toString();
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  public getMilliSeconds(){
    var totalSeconds = this.hours*60*60 + this.minutes*60 + this.seconds;

    return totalSeconds * 1000;
  }
}

class ChessClock{
  public whiteClock: Clock;
  public blackClock : Clock;
  private isWhitePlayStarted : boolean;
  private isBlackPlayStarted : boolean;

  constructor(hours:number, minutes:number, seconds:number){
    this.whiteClock = new Clock(hours, minutes, seconds);
    this.blackClock = new Clock(hours, minutes, seconds);
  }
  

  public stop(stopColor:string){
    if(stopColor == "white" && this.isBlackPlayStarted){
      this.whiteClock.stop();
      this.blackClock.start();
    } else if (stopColor == "black" && this.isWhitePlayStarted){
      this.blackClock.stop();
      this.whiteClock.start();
    }
  }

  public startWhitePlay(){
    this.isWhitePlayStarted = true;
  }

  public startBlackPlay(){
    this.isBlackPlayStarted = true;
  }

}
