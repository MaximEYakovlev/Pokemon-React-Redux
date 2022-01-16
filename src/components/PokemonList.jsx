import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import _ from "lodash";
import { getPokemonList } from "../redux/actions/pokemonActions";
import { Link, useNavigate } from "react-router-dom";

export const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="list-wrapper">
          {pokemonList.data.map((el) => {
            return (
              <div className="pokemon-item">
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };
  return (
    <div>
      <div className="search-wrapper">
        <p>Search:</p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => navigate(`/pokemon/${search}`)}>Search</button>
      </div>
      {showData()}
    </div>
  );
};
