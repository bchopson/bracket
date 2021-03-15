import ncaam2021 from "bracket-data/browser/ncaam-2021";

import Game from "./components/Game";

function App() {
  const order = ncaam2021.order;

  return (
    <div className="container mx-auto">
      {ncaam2021.constants.REGION_IDS.map((regionId: string) => {
        const region = ncaam2021.bracket.regions[regionId];
        return order.reduce(
          (components: JSX.Element[], ranking: number, i: number) => {
            if (i % 2 === 0) {
              const homeRanking = ranking;
              const awayRanking = order[i + 1];
              const homeTeam = {
                ranking: homeRanking,
                name: region.teams[homeRanking - 1],
              };
              const awayTeam = {
                ranking: awayRanking,
                name: region.teams[awayRanking - 1],
              };
              const key = `${regionId}${homeRanking}${awayRanking}`;
              components.push(
                <Game key={key} home={homeTeam} away={awayTeam} />
              );
            }
            return components;
          },
          []
        );
      })}
    </div>
  );
}

export default App;
