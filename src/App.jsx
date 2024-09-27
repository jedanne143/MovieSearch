import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Heading from './components/Heading'
import Searchbar from './components/Searchbar'
const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue , setSearchValue] = useState('')

  //to search movies based on user input
const searchMovie = async () => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`)
  const data = await response.json()
  //get results of fetch API and store it to movies only if there's data
  if (data.Search){
    //sets data to movies with fetched data
    console.log(data.Search)
  setMovies(data.Search)
  } 
}
//will call searchMovie when the page loads and when there's a new searchValue
useEffect( () => {
  searchMovie(searchValue);
} , [searchValue])







  return (
    <main>
    <Heading />
    <Searchbar searchValue= {searchValue} setSearchValue={setSearchValue} />
    <MovieList movies = {movies}/>

    </main>
  )
}

export default App
