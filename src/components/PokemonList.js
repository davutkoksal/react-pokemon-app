import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Segment } from "semantic-ui-react";
import { addNewPokemons, fetchPokemons } from "../actions/PokemonActions";
import PokemonListItem from "./PokemonListItem";
import LoadingComponent from "./LoadingComponent";
import InfiniteScroll from "react-infinite-scroller";
import { useCallback } from "react";

function PokemonList() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemons.pokemonList);

  const nextUrl = useSelector((state) => state.pokemons.nextUrl);
  useEffect(() => {
    const loadPokemons = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchPokemons());
      } catch (error) {
        setErrorState(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadPokemons();
  }, [dispatch]);

  const loadFunc = useCallback(() => {
    dispatch(addNewPokemons(nextUrl));
  }, [dispatch, nextUrl]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (errorState) {
    return (
      <Segment textAlign="center">
        <h1>Something went wrong while loading pokemons</h1>
      </Segment>
    );
  }
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Card.Group className="main">
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <PokemonListItem key={pokemon.name} pokemon={pokemon} />
          ))}
      </Card.Group>
    </InfiniteScroll>
  );
}

export default PokemonList;
