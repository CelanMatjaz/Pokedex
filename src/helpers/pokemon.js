export const getAbilityUrl = id => `https://pokeapi.co/api/v2/ability/${id}`;

export const getMoveUrl = id => `https://pokeapi.co/api/v2/move/${id}`;

export const getPokemonUrl = name =>
  `https://pokeapi.co/api/v2/pokemon/${name}`;

export const getPokemonImgUrl = id =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const getLocalPokemonUrl = pokemon =>
  `/pokemon/${pokemon.toLowerCase()}`;
