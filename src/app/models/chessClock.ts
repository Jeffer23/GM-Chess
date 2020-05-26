import { Clock } from './clock'
export class ChessClock{
    public whiteClock: Clock;
    public blackClock : Clock;
    private isWhitePlayStarted : boolean;
    private isBlackPlayStarted : boolean;
  
    constructor(hours:number, minutes:number, seconds:number, timeoutFunc?: any){
      this.whiteClock = new Clock(hours, minutes, seconds, timeoutFunc, "white");
      this.blackClock = new Clock(hours, minutes, seconds, timeoutFunc, "black");
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
  
    public gameOverStopClock() {
        this.whiteClock.stop();
        this.blackClock.stop();
    }
    public startWhitePlay(){
      this.isWhitePlayStarted = true;
    }
  
    public startBlackPlay(){
      this.isBlackPlayStarted = true;
    }

    public updateChessClock(chessClock : ChessClock){
      this.whiteClock.updateClock(chessClock.whiteClock.hours, chessClock.whiteClock.minutes, chessClock.whiteClock.seconds);
      this.blackClock.updateClock(chessClock.blackClock.hours, chessClock.blackClock.minutes, chessClock.blackClock.seconds);
    }
  
  }