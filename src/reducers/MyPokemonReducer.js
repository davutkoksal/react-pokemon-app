import {
  ADD_TO_MY_POKEMONS,
  REMOVE_FROM_MY_POKEMONS,
} from "../actions/MyPokemonActions";

const initialState = {
  myPokemonsList: [],
};

export const MyPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MY_POKEMONS:
      let newList;
      let isAvailable;
      state.myPokemonsList.forEach((pk) => {
        if (pk.id === action.payload.id) {
          isAvailable = true;
          alert(
            "This Pokemon is already available in your favorite Pokemons List"
          );
        }
      });
      newList = isAvailable
        ? state.myPokemonsList
        : state.myPokemonsList.concat(action.payload);
      return {
        ...state,
        myPokemonsList: newList,
      };

    case REMOVE_FROM_MY_POKEMONS:
      return {
        ...state,
        myPokemonsList: state.myPokemonsList.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
