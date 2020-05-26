import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlayWithComputerComponent } from './play-with-computer/play-with-computer.component';
import { PlayWithComputerSettingsComponent } from './play-with-computer-settings/play-with-computer-settings.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChessDialogComponent } from './chess-dialog/chess-dialog.component';
import { OnlineDashboardComponent } from './online-dashboard/online-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    RegisterComponent,
    PlayWithComputerComponent,
    PlayWithComputerSettingsComponent,
    MenuComponent,
    ChessDialogComponent,
    OnlineDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatDialogModule,
    LayoutModule,
    MatCheckboxModule,
    HttpClientModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
