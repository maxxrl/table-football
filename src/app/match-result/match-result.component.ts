import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match, Team} from "../app.model";


@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}


  // @ts-ignore
  selectedTeam1: Team;
  // @ts-ignore
  selectedTeam2: Team;
  // @ts-ignore
  selectedLoser: Team;

  @Input()
  teams: Team[] = [];


  @Output() addMatch = new EventEmitter<Match>();

  matches: Match[] = [];
  onSubmit() {
    this.matches.push({
      team1: this.selectedTeam1,
      team2: this.selectedTeam2,
      loser: this.selectedLoser
    });
    this.addMatch.emit({
      team1: this.selectedTeam1,
      team2: this.selectedTeam2,
      loser: this.selectedLoser
    })
  }
}
