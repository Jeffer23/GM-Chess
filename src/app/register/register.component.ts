import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChessDialogComponent } from '../chess-dialog/chess-dialog.component';
import { User } from '../models/user';
import { UserService } from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;
  public password: string;
  constructor(private userService:UserService, private dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  public registerUser(){
    //Validation
    if(this.user.password === this.password){
      this.userService.register(this.user).subscribe(response=>{
        //boolean response
        if(response){
          this.router.navigateByUrl("/");
        } else {
          this.dialog.open(ChessDialogComponent, {
            width: '70%',
            data : {message:"User Id already exists", isRegistration:true}
          });
        }
      });
    } else {
      this.dialog.open(ChessDialogComponent, {
        width: '70%',
        data : {message:"Password Mismatch", isRegistration:true}
      });
    }
  }

}
