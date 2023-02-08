export interface Player {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  player1: Player;
  player2: Player;
}

export interface Match {
  id: number;
  winner: Team;
  loser: Team;
}
