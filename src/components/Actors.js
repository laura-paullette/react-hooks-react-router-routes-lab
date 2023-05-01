import React from "react";
import { actors } from "../data";

function Actors() {

  function Movies(current){
    const movieList = current.movies.map((movie) =>{
      return <li key={movie}>{movie}</li>;
    });
    return movieList;
  }

  
  
  const actorList = actors.map((actor) => {
    return (
      <div key={actor.name}>
        Name:{actor.name} 
        <ul>
          Movies:
          {Movies(actor)}
        </ul>
      </div>
    );
  });


  return (
    <div>
        <h1>Actors Page</h1>
        {actorList}
    </div>

  );
  

  
 
}

export default Actors;
