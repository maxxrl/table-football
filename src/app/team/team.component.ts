import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Spieler, Team} from "../app.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  selectedSpieler1: Spieler;
  // @ts-ignore
  selectedSpieler2: Spieler;
  @Input()
  spieler: Spieler[] = [];
  teams: Team[] = [];

  @Output() addTeam = new EventEmitter<Team>();

  onSubmit() {

    const teamName = `${this.selectedSpieler1.name} & ${this.selectedSpieler2.name}`;
    this.teams.push({name: teamName, spieler: [this.selectedSpieler1, this.selectedSpieler2]});
    this.selectedSpieler1.teams.push({name: teamName, spieler: [this.selectedSpieler1, this.selectedSpieler2]});
    this.selectedSpieler2.teams.push({name: teamName, spieler: [this.selectedSpieler1, this.selectedSpieler2]});
    this.addTeam.emit({name: teamName, spieler: [this.selectedSpieler1, this.selectedSpieler2]});
  }
}
