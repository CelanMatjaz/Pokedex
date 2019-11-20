import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalPokemonUrl } from '../../helpers/pokemon';

const PokemonSearch = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  return (
    <form
      className="Pokemon-Search"
      onSubmit={e => {
        e.preventDefault();
        if (search.length > 0) {
          history.push(getLocalPokemonUrl(search));
        }
      }}
    >
      <input
        type="text"
        placeholder="Search for pokemon"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default PokemonSearch;
