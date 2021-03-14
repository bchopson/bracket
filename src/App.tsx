import Game from "./components/Game";

function App() {
  return (
    <div className="container mx-auto">
      <Game
        home={{ name: "Butler", ranking: 11 }}
        away={{ name: "Duke", ranking: 2 }}
      />
    </div>
  );
}

export default App;
