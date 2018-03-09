import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((act, index) => (
        <div key={ index }>
          <p>{ act.name }</p>
          {act.movies.map((mov, index) => (
            <p>{ mov }</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
