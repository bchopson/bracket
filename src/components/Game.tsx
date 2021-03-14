// import React from 'react';

// TODO: move to types
type Team = {
  name: string;
};

export type GameProps = {
  home: Team;
  away: Team;
};

function Game(props: GameProps) {
  return <div></div>;
}

export default Game;
