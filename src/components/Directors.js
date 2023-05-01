import React from "react";
import { directors } from "../data";

function Directors() {

  function Movies(current){
    const movieList = current.movies.map((movie) =>{
      return <li key={movie}>{movie}</li>;
    });
    return movieList;
  }

  
  
  const directorList = directors.map((director) => {
    return (
      <div key={director.name}>
        Name:{director.name} 
        <ul>
          Movies:
          {Movies(director)}
        </ul>
      </div>
    );
  });


  return (

    <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>
  );

  }
export default Directors;
