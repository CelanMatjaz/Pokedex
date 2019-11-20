import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import Pokemon from './components/PokemonStats/Pokemon';
import MyPokemonList from './components/PokemonList/MyPokemonList';
import NotFound from './components/layout/NotFound';
import Ability from './components/Abilities/Ability';
import Move from './components/Moves/Move';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route exact path="/pokemon/:name" component={Pokemon} />
      <Route exact path="/my-pokemon" component={MyPokemonList} />
      <Route exact path="/move/:id" component={Move} />
      <Route exact path="/ability/:id" component={Ability} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
