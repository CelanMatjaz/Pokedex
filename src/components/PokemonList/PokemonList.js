import React, { useState } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';
import { useAxios } from '../../api/useAxios';
import PokemonSearch from './PokemonSearch';
import PokemonListButtons from './PokemonListButtons';

const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=30';

const PokemonList = () => {
  const [url, setUrl] = useState(initialUrl);
  const [showImages, setShowImages] = useState(true);
  const { results, next, previous } = useAxios(url);
  return (
    <>
      <PokemonSearch />
      <PokemonListButtons
        showImages={showImages}
        previous={previous}
        next={next}
        results={results}
        setUrl={setUrl}
        setShowImages={setShowImages}
      />
      <div className="Pokemon-List">
        {results && results.length > 0
          ? results.map((pokemon, i) => (
              <PokemonItem
                key={i}
                name={pokemon.name}
                url={pokemon.url}
                showImg={showImages}
              />
            ))
          : 'Loading...'}
      </div>
    </>
  );
};

export default PokemonList;
