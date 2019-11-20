import React, { useState } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';
import PokemonListButtons from './PokemonListButtons';
import { getMyPokemon, getMyPokemonRange } from '../../helpers/myPokemonList';

//Change if you want less/more pokemon on a page
const pageSize = 3;

const MyPokemonList = () => {
  const p = Object.values(getMyPokemon());
  const [showImages, setShowImages] = useState(true);
  const [currentSlice, setCurrentSlice] = useState(0);
  const [myPokemon, setMyPokemon] = useState(
    getMyPokemonRange(currentSlice, pageSize)
  );
  const numOfMyPokemon = p.length;

  const next = () => {
    const pokemon = getMyPokemonRange(currentSlice + pageSize, pageSize);
    if (pokemon.length > 0) {
      setCurrentSlice(currentSlice + pageSize);
      setMyPokemon(pokemon);
    }
  };

  const previous = () => {
    const pokemon = getMyPokemonRange(currentSlice - pageSize, pageSize);
    if (pokemon.length > 0) {
      setCurrentSlice(currentSlice - pageSize, pageSize);
      setMyPokemon(pokemon);
    }
  };

  return (
    <>
      <div className="Pokemon-List-Number">
        Number of pokemon in list: {numOfMyPokemon}
      </div>
      <PokemonListButtons
        showImages={showImages}
        previous={previous}
        next={next}
        setShowImages={setShowImages}
      />
      <div className="Pokemon-List">
        {myPokemon && Object.values(myPokemon).length > 0
          ? Object.values(myPokemon).map((pokemon, i) => (
              <PokemonItem
                key={i}
                name={pokemon.name}
                url={pokemon.url}
                showImg={showImages}
                id={pokemon.id}
                currentSlice={currentSlice}
                size={myPokemon.length}
              />
            ))
          : 'Loading...'}
      </div>
    </>
  );
};

export default MyPokemonList;
