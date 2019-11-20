import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize, getIdFromUrl } from '../../helpers/common';

const MovesList = ({ moves }) => {
  return (
    <>
      {moves.map((move, i) => (
        <div className="Pokemon-Moves-List-Item" key={i}>
          <Link to={`/move/${getIdFromUrl(move.move.url)}`}>
            {capitalize(move.move.name)
              .split('-')
              .join(' ')}
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovesList;
