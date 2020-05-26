import { Component } from '@angular/core';
import { SESSION_ID } from './constants/session-constant'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JeffChess';
  isUserLoggedIn: boolean;

  constructor(){
    if(localStorage.getItem(SESSION_ID.userId))
      this.isUserLoggedIn = true;
  }
}
