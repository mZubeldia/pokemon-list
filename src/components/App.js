import PokeList from "./PokeList";
import data from "../data/pokemon.json";
import "../styles/App.scss";
import "../styles/resets.scss";
import { useState } from "react";

function App() {
  const [pokeData] = useState(data);
  return (
    <>
      <header>
        <h1 className="header-title">Mi lista Pokemon</h1>
      </header>
      <main className="main">
        <PokeList data={pokeData} />
      </main>
    </>
  );
}

export default App;
