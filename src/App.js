import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turned meth producer.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
      rating: 9.5
    },
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51nbVEuw1HL.jpg",
      rating: 8.8
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
