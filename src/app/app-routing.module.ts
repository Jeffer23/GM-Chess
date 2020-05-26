import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayWithComputerSettingsComponent} from './play-with-computer-settings/play-with-computer-settings.component';
import { PlayWithComputerComponent } from './play-with-computer/play-with-computer.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { OnlineDashboardComponent } from './online-dashboard/online-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'playWithComputerSettings', component: PlayWithComputerSettingsComponent },
  { path: 'playWithComputer', component: PlayWithComputerComponent },
  { path: 'playOnline/:gameType', component: GameComponent },
  { path: 'onlineDashboard', component: OnlineDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { useHash: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
