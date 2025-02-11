import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import './movieList.css';
import { Link } from 'react-router';
import BackgroundImage from './backgroundImage';
const MoviesList = () => {
  const [movies, setmovies] = useState([]);

  const getData = async () => {
    const moviesRes = await fetch('http://localhost:4007/movies');
    const Movies = await moviesRes.json();
    const data = Movies.data;
    setmovies(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <BackgroundImage />
      <h1 className="movie-heading-top-rated">Top Rated Movies🔥</h1>
      <div className="cards">
        {movies.map((movie) => {
          return (
            <>
              <div className="card">
                <div className="imagediv">
                  <Link to={`/moreDetails/${movie._id}`}>
                    <img className="image" src={movie.poster} />
                  </Link>
                </div>
                <div className="description">
                  <h2>{movie.title}</h2>
                  {console.log(movie.genere)}
                  <div className="genere_main">
                    {movie.genere.map((gn) => {
                      return <p className="single">{gn} / </p>;
                    })}
                  </div>
                  <p>Rating: {movie.rating}</p>
                </div>
                <a href={movie.trailer} target="_blank">
                  <button className="play-button">
                    <div className="TrailerText">
                      <FaPlay />
                      <p>Trailer</p>
                    </div>
                  </button>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MoviesList;
