import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { webSocketURL } from './constants/GMConstant'

@Injectable({
  providedIn: 'root'
})
export class GmWebSocketService {

  private gmWebSocket: WebSocketSubject<any>;
  constructor() { 
    this.gmWebSocket = webSocket(webSocketURL);
    this.gmWebSocket.subscribe(this.onMessage, this.onError, this.onClose);
  }

  public subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void){
    this.gmWebSocket.subscribe(next, error, complete);
  }

  public send(message: string){
    console.log("Msg Sending : " + JSON.stringify(message));
    this.gmWebSocket.next(message);
  }

  public close(){
    this.gmWebSocket.complete();
  }
  private onMessage(evt){
    console.log(evt.data);
  }

  private onError(error){
    console.error(error.message);
  }

  private onClose(){
    console.error('[close] Connection died');
    /*if (event.wasClean) {
      console.log('[close] Connection closed cleanly, code=' + event.code + 'reason=' + event.code);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.error('[close] Connection died');
    }*/
  }
}
