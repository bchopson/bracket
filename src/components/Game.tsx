// TODO: move to types
type Team = {
  name: string;
  ranking: number;
};

export type GameProps = {
  home: Team;
  away: Team;
};

function Game({ home, away }: GameProps) {
  return (
    <div className="border border-gray-200 w-80">
      <div>
        <span data-testid="home-ranking">{home.ranking}</span>
        <span data-testid="home-name">{home.name}</span>
      </div>
      <div>
        <span data-testid="away-ranking">{away.ranking}</span>
        <span data-testid="away-name">{away.name}</span>
      </div>
    </div>
  );
}

export default Game;
