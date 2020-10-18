import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Image, List, Popup } from "semantic-ui-react";
import {
  addToMyPokemons,
  removeFromMyPokemons,
} from "../actions/MyPokemonActions";

import PokemonDetailsModal from "./PokemonDetailsModal";

export default function PokemonListItem(props) {
  const dispatch = useDispatch();

  const pokemon = props.pokemon;
  const url = pokemon.url;
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [showModal, setShowModal] = useState(false);
  const myPokemonsList = useSelector(
    (state) => state.myPokemons.myPokemonsList
  );
  const fetchPokemon = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSelectedPokemon(data);
  }, [url]);

  useEffect(() => {
    if (pokemon.url) {
      fetchPokemon();
    } else {
      setSelectedPokemon(pokemon);
    }
  }, [fetchPokemon, pokemon, myPokemonsList]);

  const handleShowModal = () => {
    setShowModal((pre) => !pre);
  };
  let isAvailable;

  myPokemonsList.forEach((element) => {
    if (element.id === selectedPokemon.id) {
      isAvailable = true;
      return true;
    }
  });

  return (
    <>
      <Card>
        <Card.Content
          className="cardAction"
          onClick={handleShowModal}
          textAlign="center"
        >
          <Image
            ui={false}
            wrapped
            src={
              selectedPokemon?.sprites && selectedPokemon?.sprites.front_default
            }
          />
          <Card.Header>
            {selectedPokemon?.name && selectedPokemon.name.toUpperCase()}
          </Card.Header>
          <Card.Description className="subItem">
            Base Experience:{selectedPokemon?.base_experience}
          </Card.Description>

          <Card.Description className="subItem">
            Moves:{selectedPokemon.moves && selectedPokemon?.moves.length}
          </Card.Description>

          <Card.Description className="subItem">
            <Popup
              trigger={<div>Abilities</div>}
              content={
                <List divided>
                  {selectedPokemon.abilities &&
                    selectedPokemon?.abilities.map((el) => (
                      <List.Item key={el.ability?.name}>
                        {el.ability?.name}
                      </List.Item>
                    ))}
                </List>
              }
              on="hover"
            />
          </Card.Description>
          <Card.Description className="subItem">
            <Popup
              trigger={<div>Stats</div>}
              content={
                <List divided>
                  {selectedPokemon.stats &&
                    selectedPokemon?.stats.map((el) => (
                      <List.Item key={el.stat?.name}>
                        {el.stat?.name}: {el.base_stat}
                      </List.Item>
                    ))}
                </List>
              }
              on="hover"
            />
          </Card.Description>
          <Card.Description className="subItem">
            Types
            {selectedPokemon.types &&
              selectedPokemon?.types.map((el) => (
                <span className="badge" key={el.type?.name}>
                  {el.type?.name}
                </span>
              ))}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {isAvailable ? (
            <Button
              onClick={() => dispatch(removeFromMyPokemons(selectedPokemon.id))}
              fluid
              icon="trash"
              content="Remove from My Pokemons"
              color="red"
            />
          ) : (
            <Button
              onClick={() => dispatch(addToMyPokemons(pokemon))}
              fluid
              icon="add"
              content="Add To My Pokemons"
              color="red"
            />
          )}
        </Card.Content>
      </Card>
      {showModal && (
        <PokemonDetailsModal
          showModal={showModal}
          handleShowModal={handleShowModal}
          selectedPokemon={selectedPokemon}
        />
      )}
    </>
  );
}
