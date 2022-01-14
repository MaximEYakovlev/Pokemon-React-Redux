import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { PokemonList } from "./components/PokemonList";
import { Pokemon } from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
