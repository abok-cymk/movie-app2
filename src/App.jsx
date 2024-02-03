import { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './components/MovieCard';
import './App.css'
import Pagination from './components/Pagination';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // get the recent searches from localstorage
    const recent = localStorage.getItem("recent");
    if(recent) {
      setQuery(recent);
    }
  }, []);

  useEffect(() => {
    // fetch the movies from the API
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
        );
        const data = response.data;
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    // Only fetch if the query is not empty
    if(query) {
      fetchMovies();
      // save the query to localstorage
      localStorage.setItem("recent", query);
    }
  }, [query, page]);

  // handle the input change
  const handleInputChange = e => {
    setQuery(e.target.value);
  };
  
  // handle the form submit
  const handleFormSubmit = e => {
    e.preventDefault();

    // reset the page to 1
    setPage(1);
  };

  // handle the page change
  const handlePageChange = newPage => {
    setPage(newPage);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-center mb-4'>Movie App</h1>
      <form onSubmit={handleFormSubmit} className='mb-4'>
        <input type="text"
        value={query}
        onChange={handleInputChange}
        placeholder='Search by movie title'
        className='w-full p-2 border rounded' />
      </form>
      <div
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination 
      page={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}/>
    </div>
  )
}

export default App
