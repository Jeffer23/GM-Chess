export class Clock{
    private clockColor : string = "white";
    public hours: number;
    public minutes : number;
    public seconds : number;
    private onTimeout : any = ()=>{alert("Game Over");};
    private timeoutId:any;
  
    constructor(hours:number, minutes:number, seconds:number, timeoutFunc?:any, clockColor?:string){
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.onTimeout = timeoutFunc;
      this.clockColor = clockColor;
    }
  
    public start(){
      this.timeoutId = setInterval(()=>{
       if(this.seconds-- <= 0){
          if(this.minutes-- <= 0){
            if(this.hours-- <= 0){
              var winningColor;
              if(this.clockColor == "white"){
                winningColor = "Black";
              } else if(this.clockColor == "Black"){
                winningColor = "white";
              }
              this.onTimeout(winningColor);
              this.stop();
            } else {
              this.minutes = 59;
              this.seconds = 59;
            }
          } else {
            this.seconds = 59;
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
      } else if(this.hours !=undefined && this.hours  == -1){
        hours = "00";
      } else if(this.hours !=undefined && this.hours.toString().length == 2){
        hours = this.hours.toString();
      }
  
      if(this.minutes !=undefined && this.minutes.toString().length==1){
        minutes = "0" + this.minutes;
      } else if(this.minutes !=undefined && this.minutes == -1){
        minutes = "00";
      } else if(this.minutes !=undefined && this.minutes.toString().length == 2){
        minutes = this.minutes.toString();
      }
  
      if(this.seconds !=undefined && this.seconds.toString().length==1){
        seconds = "0" + this.seconds;
      } else if(this.seconds !=undefined && this.seconds == -1){
        seconds = "00";
      } else if(this.seconds !=undefined && this.seconds.toString().length == 2){
        seconds = this.seconds.toString();
      } 
      return hours + ":" + minutes + ":" + seconds;
    }
  
    public getMilliSeconds(){
      var totalSeconds = this.hours*60*60 + this.minutes*60 + this.seconds;
  
      return totalSeconds * 1000;
    }

    public updateClock(h: number, m: number,  s:number){
      this.hours = h;
      this.minutes = m;
      this.seconds = s;
    }
  }