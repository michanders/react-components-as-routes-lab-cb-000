import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((mov, index) => (
        <div key={ index }>
          <p>{ mov.title }</p>
          <p>{ mov.time }</p>
          <p>{ mov.metascore }</p>
          {mov.genres.map((gen, index) => (
            <p>{ gen }</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
