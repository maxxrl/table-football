import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Spieler} from "../app.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  spielerName: string = "";
  spieler: Spieler[] = [];

  @Output() spielerEvent = new EventEmitter<Spieler>();


  onSubmit() {
    this.spieler.push({ name: this.spielerName, teams: [] });
    this.spielerEvent.emit({ name: this.spielerName, teams: [] });
  }

}
