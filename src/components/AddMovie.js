import React, {useState} from "react";

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      onAdd({ ...newMovie, rating: parseFloat(newMovie.rating) });
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
      <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
      <input name="rating" type="number" placeholder="Rating" value={newMovie.rating} onChange={handleChange} min="0" max="10" />
      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};

export default AddMovie;