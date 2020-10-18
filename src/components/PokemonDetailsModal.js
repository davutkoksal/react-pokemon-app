import React from "react";

import { Card, Grid, Header, Image, List, Modal } from "semantic-ui-react";

export default function PokemonDetailsModal({
  showModal,
  handleShowModal,
  selectedPokemon,
}) {
  return (
    <Modal onClose={() => handleShowModal()} open={showModal}>
      <Header
        color="blue"
        textAlign="center"
        content={selectedPokemon.name.toUpperCase()}
      />

      <Modal.Content
        style={{ backgroundColor: " rgb(241, 241, 241)" }}
        image
        scrolling
      >
        <Grid>
          <Grid.Column width={4}>
            <Card>
              <Card.Content textAlign="center">
                <Image
                  size="medium"
                  wrapped
                  src={
                    selectedPokemon.sprites &&
                    selectedPokemon.sprites.front_default
                  }
                />
                <Card.Description>
                  Base Experience:{selectedPokemon.base_experience}
                </Card.Description>
                <Card.Description>
                  Weight:{selectedPokemon.weight}
                </Card.Description>
                <Card.Description>
                  Height:{selectedPokemon.height}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card>
              <Card.Content textAlign="center">
                <Card.Header>Stats</Card.Header>
              </Card.Content>
              <Card.Content>
                <List divided>
                  {selectedPokemon.stats &&
                    selectedPokemon.stats.map((el) => (
                      <List.Item key={el.stat.name}>
                        {el.stat.name}: {el.base_stat}
                      </List.Item>
                    ))}
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card>
              <Card.Content textAlign="center">
                <Card.Header>Abilities</Card.Header>
              </Card.Content>
              <Card.Content>
                <List divided>
                  {selectedPokemon.abilities &&
                    selectedPokemon.abilities.map((el) => (
                      <List.Item key={el.ability.name}>
                        {el.ability.name}
                      </List.Item>
                    ))}
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card>
              <Card.Content textAlign="center">
                <Card.Header>
                  Moves ({selectedPokemon.moves.length})
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <List divided>
                  {selectedPokemon.moves &&
                    selectedPokemon.moves.map((el) => (
                      <List.Item key={el.move.name}>{el.move.name}</List.Item>
                    ))}
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  );
}
