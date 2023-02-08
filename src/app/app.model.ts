export interface Spieler {
  name: string;
  teams: Team[];
}

export interface Team {
  name: string;
  spieler: Spieler[];
}

export interface Match {
  team1: Team;
  team2: Team;
  loser: Team;
}
