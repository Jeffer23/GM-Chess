import { Component, OnInit } from '@angular/core';
import { SESSION_ID } from '../constants/session-constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public userId: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem(SESSION_ID.userId);
  }

  logoff(){
    localStorage.removeItem(SESSION_ID.autoSignInEnabled);
    localStorage.removeItem(SESSION_ID.userId);
    localStorage.removeItem(SESSION_ID.password);

    window.location.href="/";
  }

  public openPlayOnline(){
    window.location.href="/#/playOnline";
    //this.router.navigate(['/playOnline']);

    /*setTimeout(() => {
      location.reload();
    }, 1000);*/
    
  }
}
