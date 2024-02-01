import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const [movie, setMovie] = useState({});
  const { imdbID } = useParams();
  async function fetchMovie() {
    const apiKey = import.meta.env.VITE_OMDB_KEY;
    const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    const response = await axios.get(endpoint);
    setMovie(response.data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div> 
      <img src={movie.Poster} alt={movie.Title} />
      <p>Title : {movie.Title}</p>
      <p>Year : {movie.Year}</p>
      <p>Rated : {movie.Rated}</p>
    </div>
  );
}
export default SingleMovie;
