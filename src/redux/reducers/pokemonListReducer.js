import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
} from "../types";

const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

export const pokemonListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    case POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };
    default:
      return state;
  }
};
