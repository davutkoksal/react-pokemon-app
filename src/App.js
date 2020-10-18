import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MyPokemonsList from "./components/MyPokemonsList";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/mypokemons" component={MyPokemonsList} />
      </Container>
    </div>
  );
}

export default App;
