export const ADD_TO_MY_POKEMONS = "ADD_TO_MY_POKEMONS";
export const REMOVE_FROM_MY_POKEMONS = "REMOVE_FROM_MY_POKEMONS";
export const addToMyPokemons = (pokemon) => {
  return async (dispatch) => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      dispatch({ type: ADD_TO_MY_POKEMONS, payload: data });
    } catch (err) {
      throw err;
    }
  };
};
export const removeFromMyPokemons = (id) => {
  return { type: REMOVE_FROM_MY_POKEMONS, payload: id };
};
