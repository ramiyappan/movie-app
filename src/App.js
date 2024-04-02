import './App.css';
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=ad8d4f8'

function App() {
  const [movies, setMovies] = useState([]) // movies is the state value and setMovies is the function that sets the state of movies
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`) // fetch data from the API
    const data = await response.json()

    // set the movies array to store all the movies data from the API
    setMovies(data.Search)
  }

  // useEffect() loads once everytime the page is rendered
  useEffect(() => {
    searchMovies('Batman')
  }, [])

  return (
    <div className="app">

      {/* Title */}
      <h1>MovieLand</h1>

      {/* Search Bar */}
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if(e.key==='Enter') 
              searchMovies(searchTerm)
          }}
        />
        {/* search icon */}
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Generate the MovieCard component for each element, if movies array is not empty  */}
      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
