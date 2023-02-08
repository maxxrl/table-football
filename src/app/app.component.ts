import {Component} from '@angular/core';
import {Match, Spieler, Team} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-football';
  matches: Match[] = [];
  spielerListe: Spieler[] = [];
  teams: Team[] = [];

  addTeam(team: Team) {
    this.teams.push(team);
  }

  addMatch(matches: Match) {
    this.matches.push(matches);
  }

  addSpieler(spieler: Spieler) {
    this.spielerListe.push(spieler);
  }

}
