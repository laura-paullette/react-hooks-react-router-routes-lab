import React from "react";
import { movies } from "../data";

function Movies() {

  function Genres(current){
    const genres = current.genres.map((genre) =>{
      return <li key={genre}>{genre}</li>;
    });
    return genres;
  }

  
  
  const movieList = movies.map((movie) => {
    return (
      <div key={movie.title}>
        Title:{movie.title} <br></br>
        Time:{movie.time}
        <ul>
          Genres:
          {Genres(movie)}
        </ul>
      </div>
    );
  });



  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>

  );
}

export default Movies;
