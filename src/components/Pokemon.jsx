import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../redux/actions/pokemonActions";
import _ from "lodash";

export const Pokemon = (props) => {
  const params = useParams();
  const pokemonName = params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} />
            <img src={pokeData.sprites.back_default} />
            <img src={pokeData.sprites.front_shiny} />
            <img src={pokeData.sprites.back_shiny} />
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map((el) => {
              return (
                <p>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }
    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }
    return <p>error getting pokemon</p>;
  };

  return (
    <div className="poke">
      <h1>{pokemonName}</h1>
      {showData()}
    </div>
  );
};
