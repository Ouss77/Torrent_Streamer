import './App.css';
import { useState } from 'react';
import { ListingMovies } from './Components/ListingMovies';
import { Header } from './Header';
import Hero from './Hero';
import { FavoriteMovies } from './Components/FavoriteMovies';
function Home() {

  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState('')

  return (
    <div className="App" >
      <Header />
      <Hero />
      <ListingMovies setMovie={setMovie} movie={movie} setInput={setInput} input={input} />
    </div>
  )
}

export default Home;
