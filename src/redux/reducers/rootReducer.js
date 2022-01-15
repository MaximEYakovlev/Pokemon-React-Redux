import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
});
