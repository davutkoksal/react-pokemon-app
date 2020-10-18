export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const FETCH_SELECTED_POKEMON = "FETCH_SELECTED_POKEMON";
export const ADD_NEW_POKEMONS = "ADD_NEW_POKEMONS";
export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = await response.json();
      dispatch({
        type: FETCH_POKEMONS,
        payload: data.results,
        nextUrl: data.next,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const addNewPokemons = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      dispatch({
        type: ADD_NEW_POKEMONS,
        payload: data.results,
        nextUrl: data.next,
      });
    } catch (err) {
      throw err;
    }
  };
};
