import React from 'react'

function MovieList({movies}) {
  return (
    <div className="resultContainer"> 
        {movies.map( (movie, index) => (
            <div key = {index} className= "card">
              {/* added conditions for movies with no posters */}
                <img src= { movie.Poster ==="N/A" ? "https://th.bing.com/th/id/R.f9ee5443033b35507644002069559a4f?rik=LeHXdwaIkbTOwg&riu=http%3a%2f%2fcharpoys.com%2fmodules%2fcore%2fadmin%2ftemplate-images%2fno-image.png&ehk=ANemrGomJyYZCOaQwAbpnOuTjAjo8tmG%2bSMRm%2b04r00%3d&risl=&pid=ImgRaw&r=0" : movie.Poster} 
                alt={movie.Poster === "N/A" ? "No picture provided" : "movie picture" } />
                <div className="title">{movie.Title} </div>
                <div className="year">{movie.Year}</div>
                <div className="type">{movie.Type}</div>
            </div>
        ))}
    </div>
  )
}

export default MovieList