import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Match, Player, Team} from "./match.model";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {

  /*player1: Player = {
    name: null
  }
  player2: Player = {
    name: ""
  }

  player3: Player = {
    name: ""
  }

  player4: Player = {
    name: ""
  }*/
  matchRef: AngularFirestoreCollection<Match>;
  matches: Observable<Match[]>;
  players: Observable<Player[]>;

  constructor(private store: AngularFirestore) {
    this.matchRef = this.store.collection<Match>('match');
    // @ts-ignore
    this.matches = this.store.collection('match').valueChanges({idField: 'id'}) as Observable<Match[]>;
    // @ts-ignore
    this.players = this.store.collection('player').valueChanges({idField: 'id'}) as Observable<Player[]>;

    this.matches.subscribe(value => {
      console.log(value);
    });
  }


  get() {

  }

  add() {
    const player1: Player = {
      name: "Max",
      id: 1
    }
    const player2: Player = {
      name: "Jan",
      id: 2
    }

    const player3: Player = {
      name: "Timo",
      id: 3
    }

    const player4: Player = {
      name: "Adam",
      id: 4
    }

    const team1: Team = {
      id: 1,
      player1: player1,
      player2: player2
    }
    const team2: Team = {
      id: 2,
      player1: player3,
      player2: player4
    }
    const matchData: Match = {
      winner: team1,
      loser: team2,
      id: 1
    }
    this.matchRef.add(matchData).then(value => {
    });
  }

}





