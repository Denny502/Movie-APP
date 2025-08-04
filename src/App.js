import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([
  {
    id: 1,
    title: "Ford v Ferrari",
    description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    posterURL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgEOmv3LFX6oviPRrBpNkfbkF3hgMSF2rZwNUzYSRBAEQxGprXeMGgkEm9eBRDOl9iXP2Q",
    rating:8.1,
    trailerLink: "https://www.imdb.com/video/vi1737539353/?playlistId=tt1950186&ref_=ext_shr_lnk"
  },
  {
    id: 2,
    title: "Transformers: Rise of the Beasts",
    description: "Optimus Prime and the Autobots team up with a down on his luck young man, an aspiring historian and with a powerful faction of Transformers known as the Maximals to combat a sinister force from outer space that threatens the Earth and all of mankind.",
    posterURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEsFNeH_1HnJrtVLrbLdsdamTUTZwn7Kj9YBsSWiUHR4shBKafAY89uQwV_A0Z3Chj_ahPIA",
    rating:6.0,
    trailerLink: "https://www.imdb.com/video/vi4232692761/?playlistId=tt5090568&ref_=ext_shr_lnk"
  }
]);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= (rateFilter || 0)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎬 My Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleChange={setTitleFilter}
        onRateChange={setRateFilter}
      />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
