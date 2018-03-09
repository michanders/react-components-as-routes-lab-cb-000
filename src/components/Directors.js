import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((direct, index) => (
        <div key={ index }>
          <p>{ direct.name }</p>
          {direct.movies.map((mov, index) => (
            <p>{ mov }</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
