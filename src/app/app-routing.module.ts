import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayWithComputerSettingsComponent} from './play-with-computer-settings/play-with-computer-settings.component';
import { PlayWithComputerComponent } from './play-with-computer/play-with-computer.component';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  { path: 'playWithComputerSettings', component: PlayWithComputerSettingsComponent },
  { path: '', component: PlayWithComputerComponent },
  { path: 'playOnline', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
