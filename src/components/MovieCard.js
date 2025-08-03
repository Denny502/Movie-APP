import React from "react";

const MovieCard =({movie}) =>{
    return(
        <>
            <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                <img src={movie.posterURL} alt={movie.title} style={{ width: '100%' }} />
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Rating:{movie.rating}</p>
            </div>
        </>
    );
}

export default MovieCard;