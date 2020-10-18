import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Header, Segment } from "semantic-ui-react";
import PokemonListItem from "./PokemonListItem";

export default function MyPokemonsList(props) {
  const myPokemonsList = useSelector(
    (state) => state.myPokemons.myPokemonsList
  );

  if (myPokemonsList.length === 0) {
    return (
      <Segment textAlign="center">
        <Header content="You have no pokemons in your list..." />
        <Button
          primary
          content="Add Some"
          onClick={() => props.history.push("/")}
        />
      </Segment>
    );
  }

  return (
    <div>
      <Card.Group className="main">
        {myPokemonsList &&
          myPokemonsList.map((pokemon) => (
            <PokemonListItem
              myPokemonsList={myPokemonsList}
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))}
      </Card.Group>
    </div>
  );
}
