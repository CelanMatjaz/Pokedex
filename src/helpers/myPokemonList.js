export const addToMyPokemon = pokemonObj => {
  let pokemon = JSON.parse(localStorage.getItem('pokemon'));
  if (!pokemon) pokemon = {};
  pokemon[pokemonObj.id] = pokemonObj;
  localStorage.setItem('pokemon', JSON.stringify(pokemon));
  return pokemon;
};

export const removeFromMyPokemon = id => {
  const pokemon = JSON.parse(localStorage.getItem('pokemon'));
  //Should not be using delete here
  delete pokemon[id];
  localStorage.setItem('pokemon', JSON.stringify(pokemon));
  return pokemon;
};

export const getMyPokemon = () => JSON.parse(localStorage.getItem('pokemon'));

export const getMyPokemonRange = (first, limit) => {
  const pokemon = getMyPokemon();
  return Object.values(pokemon).slice(first, first + limit);
};
