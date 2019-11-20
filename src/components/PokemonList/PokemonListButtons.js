import React from 'react';

const PokemonListButtons = ({
  showImages,
  previous,
  next,
  results,
  setUrl,
  setShowImages,
  currentSlice,
  size
}) => {
  return (
    <div className="Pokemon-List-Buttons">
      <button
        onClick={() => {
          setShowImages(!showImages);
        }}
      >
        {showImages ? 'Hide images' : 'Show images'}
      </button>
      <button
        disabled={currentSlice ? currentSlice <= 0 : !previous}
        onClick={() => {
          if (setUrl && results) {
            results.length = 0;
            setUrl(previous);
          } else previous();
        }}
      >
        Previous
      </button>
      <button
        disabled={currentSlice ? currentSlice >= size : !next}
        onClick={() => {
          if (setUrl && results) {
            results.length = 0;
            setUrl(next);
          } else next();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PokemonListButtons;
