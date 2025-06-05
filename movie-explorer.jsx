import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "YOUR_TMDB_API_KEY"; // Replace with your actual TMDb API Key
const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming";

const MovieExplorer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&language=en-US`);
        setMovies(response.data.results);
      } catch (err) {
        setError("Failed to fetch movies. Try again later!");
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ textAlign: "center", maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>🎬 Upcoming Movies</h2>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>{movie.title}</h3>
            <p>📅 Release Date: {movie.release_date}</p>
            <p>🌍 Language: {movie.original_language.toUpperCase()}</p>
            <p>⭐ Rating: {movie.vote_average}/10</p>
            <p>{movie.overview.substring(0, 120)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieExplorer;
