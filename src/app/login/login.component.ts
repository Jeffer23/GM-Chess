import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SESSION_ID } from '../constants/session-constant';
import { User } from '../models/user'
import { UserService } from '../user.service'
import { ChessDialogComponent } from '../chess-dialog/chess-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  public isAutoSignInEnabled: boolean;

  constructor(private userService:UserService, private dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.isAutoSignInEnabled = true;
    if(Boolean(localStorage.getItem(SESSION_ID.autoSignInEnabled))){
      this.user.userId = localStorage.getItem(SESSION_ID.userId);
      this.user.password =  localStorage.getItem(SESSION_ID.password);

      //this.signIn();
      this.userService.login(this.user).subscribe(response=>{
        //boolean response
        if(response){
          this.router.navigateByUrl('/onlineDashboard');
        } else {
          this.dialog.open(ChessDialogComponent, {
            width: '70%',
            data : {isLogin:true}
          });
        }
      });
    }
    
  }

  public signIn(){
    console.log(this.user.userId);
    console.log(this.user.password);

    localStorage.setItem(SESSION_ID.userId, this.user.userId);
    if(this.isAutoSignInEnabled){
      localStorage.setItem(SESSION_ID.password, this.user.password);
      localStorage.setItem(SESSION_ID.autoSignInEnabled, String(this.isAutoSignInEnabled));
    }

    this.userService.login(this.user).subscribe(response=>{
      //boolean response
      if(response){
        //this.router.navigateByUrl('/onlineDashboard');
        window.location.href="/";
      } else {
        this.dialog.open(ChessDialogComponent, {
          width: '70%',
          data : {isLogin:true}
        });
      }
    });

    
  }

}
