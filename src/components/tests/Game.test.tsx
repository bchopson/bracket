import { render, screen } from "@testing-library/react";
import Game, { GameProps } from "../Game";

function getProps(): GameProps {
  return {
    home: { name: "Butler", ranking: 11 },
    away: { name: "Duke", ranking: 2 },
  };
}

describe("Game", () => {
  test("shows teams", () => {
    render(<Game {...getProps()} />);
    expect(screen.getByTestId("home-ranking").textContent).toEqual("11");
    expect(screen.getByTestId("away-ranking").textContent).toEqual("2");
    expect(screen.getByTestId("home-name").textContent).toEqual("Butler");
    expect(screen.getByTestId("away-name").textContent).toEqual("Duke");
  });
});
