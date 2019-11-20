import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize, getIdFromUrl } from '../../helpers/common';
import { getPokemonImgUrl } from '../../helpers/pokemon';

const PokemonItem = ({ name, url, showImg, id }) => {
  const pokemonId = id ? id : getIdFromUrl(url);
  return (
    <Link to={`/pokemon/${name}`} className="Pokemon-Item">
      <div className="Pokemon-Item-Container">
        <div className="Pokemon-Item-Name">
          {capitalize(name)} (no. {pokemonId})
        </div>
        <div className="Pokemon-Item-Image">
          {showImg && <img src={getPokemonImgUrl(pokemonId)} alt={name} />}
        </div>
      </div>
    </Link>
  );
};

export default PokemonItem;
