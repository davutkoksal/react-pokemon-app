import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { PokemonReducer } from "./reducers/PokemonReducer";
import { MyPokemonReducer } from "./reducers/MyPokemonReducer";
import ScrollToTop from "./components/ScrollToTop";

const rootReducer = combineReducers({
  pokemons: PokemonReducer,
  myPokemons: MyPokemonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
