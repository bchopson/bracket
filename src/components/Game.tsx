import { Team } from "types";

export type GameProps = {
  home: Team;
  away: Team;
};

function Game({ home, away }: GameProps) {
  return (
    <div className="flex w-80 border border-gray-200 shadow">
      <div className="flex flex-col">
        <span
          className="border-b border-gray-200 px-2 py-2 text-center"
          data-testid="home-ranking"
        >
          {home.ranking}
        </span>
        <span className="px-2 py-2 text-center" data-testid="away-ranking">
          {away.ranking}
        </span>
      </div>
      <div className="flex flex-col flex-grow">
        <span className="border-b border-gray-200 py-2" data-testid="home-name">
          {home.name}
        </span>
        <span className="py-2" data-testid="away-name">
          {away.name}
        </span>
      </div>
    </div>
  );
}

export default Game;
